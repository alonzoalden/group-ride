
import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService, JwtService } from '../core/services';
import { User } from '../core/models/user.model';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from '../shared/snackbar/snackbar.component';

@Component({
    selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']

})

export class HeaderComponent implements OnInit {
    currentUser: User;
    constructor(
        private user: UserService,
        private jwt: JwtService,
        private snackBar: MatSnackBar
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
    openSnackBar() {
        if (!this.user.isAuthenticated()) {
            this.snackBar.openFromComponent(SnackBarComponent, {
                duration: 4000,
            });
        }
    }
}

