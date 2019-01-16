import { Component } from '@angular/core';
import { keys } from '../../env-config';
import { Router, ActivatedRoute } from '@angular/router';
import {
	UserService,
	JwtService
} from './core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {

	constructor(
		private user: UserService,
		private jwtService: JwtService,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit() {
		
		this.activatedRoute.queryParams.subscribe(params => {
			let code = params['code'];
			if (code) {
				this.user.createUser(code, this.jwtService.getAccessToken());
			}
			else {
				this.user.handleAuthentication();
				if (this.user.isAuthenticated()) {
					this.user.populate();
				}
			}
		});
	}
}