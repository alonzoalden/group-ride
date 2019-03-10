import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User, RouteItem, RouteList, Listing } from '../core/models/index';
import { slideInAnimation, fadeInOut } from '../animations';
import {
    UserService,
    RouteService,
    UtilsService
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
    currentRoute: RouteItem[];
    date: any;    
    levels: any[];

    listing: Listing;
    
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
        private routes: RouteService,
        private utils: UtilsService
    ) { }

    ngOnInit() {
        this.user.currentUser.subscribe(
            (userData: User) => {
                this.currentUser = userData;
                this.routes.getLeaderRoutes();
            }
        )
        this.routes.currentRoutes.subscribe(
            (routeData: RouteList) => {
                this.currentRoute = routeData.routes;
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

        this.listing = new Listing(0, '', '', '', '', new RouteItem());
    }

    routeListView() {
        this.routes.selectedRouteSubject.next(new RouteList());
    }
    
    submitEntry() {
        console.log(this.listing)
    }
}