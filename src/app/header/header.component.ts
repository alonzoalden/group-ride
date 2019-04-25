
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService, JwtService } from '../core/services';
import { User } from '../core/models/user.model';
import { SnackBarComponent } from '../shared/snackbar/snackbar.component';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']

})

export class HeaderComponent implements OnInit {
    currentUser: User;
    constructor(
        public user: UserService,
        private jwt: JwtService,
        private notificationsService: NotificationsService,
        public router: Router,
    ) {}
    ngOnInit() {
        this.user.currentUser.subscribe(
            (userData: User) => {
                this.currentUser = userData;
            }
        );
    }
    isLoggedIn() {
        return !!this.jwt.getToken();
    }
    checkAuth() {
        if (!this.user.isAuthenticated()) {
            this.notificationsService.info('Please Sign In', 'You must sign in to lead a group.')
            // this.snackBar.openFromComponent(SnackBarComponent, {
            //     duration: 4000,
            // });
        }
    }
}

