import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User, Route } from '../core/models/index';
import { slideInAnimation, fadeInOut } from '../animations';
import {
    UserService,
    RouteService
} from '../core/services/index';

@Component({
    selector: 'lead',
    templateUrl: './lead.component.html',
    styleUrls: ['./lead.component.scss'],
    animations: [
		slideInAnimation
	]
})
export class LeadComponent implements OnInit {
    currentUser: User;
    currentRoute: Route;
    date: any;    
    levels: any[];

    form: {}
    dateFormControl = new FormControl('', [
        Validators.required,
    ]);

    timeFormControl = new FormControl('', [
        Validators.required,
    ]);
    paceFormControl = new FormControl('', [
        Validators.required,
    ]);

    constructor(
        private user: UserService,
        private routes: RouteService
    ) { }

    ngOnInit() {
        this.user.currentUser.subscribe(
            (userData: User) => {
                this.currentUser = userData;
                this.routes.getLeaderRoutes();
            }
        )
        this.routes.currentRoutes.subscribe(
            (routeData: Route) => {
                this.currentRoute = routeData;
            }
        )

        this.levels = [
            {
                value: '1',
                name: 'Fun'
            },
            {
                value: '2',
                name: 'Race'
            }
        ];
    }

    routeListView() {
        this.routes.selectedRouteSubject.next(new Route());
    }

    check() {
        console.log(this.date);
    }
    
    

}