import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User, RouteItem, RouteList, Listing } from '../core/models/index';
import { slideInAnimation, fadeInOut } from '../animations';

import * as moment from 'moment';
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
    currentRouteList: RouteItem[];
    date: any;    
    levels: any[];
    isSubmitting: Boolean;
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
        private userService: UserService,
        private routesService: RouteService,
        private utils: UtilsService
    ) { }

    ngOnInit() {
        this.userService.currentUser.subscribe(
            (userData: User) => {
                this.currentUser = userData;
                this.routesService.getLeaderRoutes();
            }
        )
        this.routesService.currentRoutes.subscribe(
            (routeData: RouteList) => {
                this.currentRouteList = routeData.routes;
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

        this.listing = new Listing(0, '', '', '', moment(), '', '', new RouteItem());
    }

    routeListView() {
        this.routesService.selectedRouteSubject.next(new RouteList());
    }
    
    submitEntry() {
        this.isSubmitting = true;

        const route = this.currentRouteList.find((route) => route.id === this.listing.route.id);
        this.listing.route = route;

        var time24hr = moment(this.listing.time, ["h:mm A"]).format("HH:mm");
        var time = time24hr.split(':');
        this.listing.date = this.listing.date
                                        .hour(Number(time[0]))
                                        .minutes(Number(time[1]))
        
        console.log(this.listing.date)
        this.routesService
        .submitListing(this.listing)
        .subscribe(
            listing => {
                console.log(listing);
                // this.comments.unshift(comment);
                // this.commentControl.reset('');
                this.isSubmitting = false;
            },
            errors => {
                this.isSubmitting = false;
                // this.commentFormErrors = errors;
            }
        );
    }
}