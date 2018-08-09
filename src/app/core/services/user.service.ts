import { Injectable } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import Auth0Lock from 'auth0-lock';
import { User } from '../models';
import { BehaviorSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';

//import { UserConfirmComponent } from '../../user-confirm/user-confirm.component';
@Injectable()
export class UserService {
	
	lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, {
		oidcConformant: true,
		autoclose: true,
		auth: {
			redirectUrl: AUTH_CONFIG.callbackURL,
			responseType: 'token id_token',
			audience: `https://${AUTH_CONFIG.domain}/userinfo`,
			params: {
				scope: 'openid email'
			}
		}
	});

	private currentUserSubject = new BehaviorSubject<User>(new User());
	public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

	private isAuthenticatedSubject = new ReplaySubject<boolean>(1);

	constructor(
		public router: Router,
		private apiService: ApiService,
		private jwtService: JwtService,
		private activatedRoute: ActivatedRoute,
		private dialog: MatDialog
	) {}

	public login(): void {
		this.lock.show();
	}

	public isLoading = false;

	// Call this method in app.component.ts
	// if using path-based routing
	public handleAuthentication(): void {
		this.lock.on('authenticated', (authResult) => {
			if (authResult && authResult.accessToken && authResult.idToken) {
				this.setSession(authResult);
				this.router.navigate(['/']);
				this.populate();
			}
		});
		this.lock.on('authorization_error', (err) => {
			this.router.navigate(['/']);
			console.log(err);
			alert(`Error: ${err.error}. Check the console for further details.`);
		});
	}

	private setSession(authResult): void {
		// Set the time that the access token will expire at
		const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
	}
	
	// Verify JWT in localstorage with server & load user's info.
	// This runs once on application startup.
	public populate() {
		this.isLoading = true;
        // If JWT detected, attempt to get & store user's info
		if (this.isAuthenticated()) {
            this.apiService.get(`user/${this.jwtService.getAccessToken()}`)
            .subscribe(
                data => this.setUser(data.user),
                err => console.log('err')
            );
        } else {
        // Remove any potential remnants of previous auth states
            this.logout();
        }
	}
    
	public getAuthEmail() {
		this.apiService.get(`user/authEmail/${this.jwtService.getAccessToken()}`)
            .subscribe(
                data => this.setUser(data.user),
                err => console.log('err')
            );
	}

	public openDialog(): void {
		// let dialogRef = this.dialog.open(UserConfirmComponent, {
		// width: '100%',
		// height: '400px'
		// });

		// dialogRef.afterClosed().subscribe(result => {
		// 	this.getAuthEmail();     
		// });
  	}

	public setUser(user: User) {
		this.activatedRoute.queryParams.subscribe(params => {
			let code = params['code'];

			if (this.isAuthenticated()) {
				if (!code && !user) {
					this.openDialog();
				}
				else {
					// Set current user data into observable
					this.currentUserSubject.next(user);
					// Set isAuthenticated to true
					this.isAuthenticatedSubject.next(true);
					this.isLoading = false;
            	}
        	}
    	});
	}

	public createUser(code: String, accessToken: String) {
		const credentials = {
			code: code,
			accessToken: accessToken,
		};
		this.apiService.post(`user/register`, credentials)
            .subscribe(
                data => this.setUser(data.user),
                err => console.log('err:', err)
            );
	}

	public logout(): void {
		// Remove tokens and expiry time from localStorage
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		// Go back to the home route
		this.router.navigate(['/']);

		// Set current user to an empty object
		this.currentUserSubject.next(new User());
		// Set auth status to false
		this.isAuthenticatedSubject.next(false);
	}

	public isAuthenticated(): boolean {
		// Check whether the current time is past the
		// access token's expiry time
		const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}

	public getCurrentUser(): User {
		return this.currentUserSubject.value;
	}

	public test(): void {
		this.apiService.get(`user/sfsfs`)
            .subscribe(
                data => console.log('asdf'),
                err => console.log('err')
            );
	}

}
