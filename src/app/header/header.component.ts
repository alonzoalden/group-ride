
import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService, JwtService } from '../core/services';

import { User } from '../core/models/user.model';


@Component({
    selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']

})

export class HeaderComponent implements OnInit {
    currentUser: User;
    constructor(
        private user: UserService,
        private jwt: JwtService
    ) {}
    ngOnInit() {
        this.user.currentUser.subscribe(
                (userData: User) => {
                    this.currentUser = userData;
                    console.log(this.jwt.getToken());
                }
            );
    }
    isLoggedIn() {
        return !!this.jwt.getToken();
    }
}