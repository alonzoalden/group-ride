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
import { slideInAnimation, fadeInOut } from './animations'
import {
	UserService,
	JwtService
} from './core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		slideInAnimation,
		fadeInOut
	]
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

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}