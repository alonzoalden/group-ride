import { Component } from '@angular/core';
import { keys } from '../../env-config';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import {
	trigger,
	query,
	style,
	animate,
	transition,
	animateChild,
	group,
	state
  } from '@angular/animations';
import { slideInAnimation } from './animations'
import {
	UserService,
	JwtService,
	ListingService
} from './core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		slideInAnimation
	]
})

export class AppComponent {

	options = {
        position: ['top', 'right'],
        timeOut: 3000,
        lastOnBottom: true,
        animate: 'rotate'
    };

	constructor(
		private user: UserService,
		private jwtService: JwtService,
		private listingService: ListingService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		
		// this.listingService.getListings();
		
		this.activatedRoute.queryParamMap.subscribe(params => {
			// let code = params['access_token'];
			let code = params.get('code');
			if (code) {
				console.log(code + 'xxxxxxxxx');
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
	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}
