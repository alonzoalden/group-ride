import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { User, RouteItem, RouteList, Listing } from '../core/models/index';
import { slideInAnimation, fadeInOut } from '../animations';
import { NotificationsService } from 'angular2-notifications';

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
    defaultListing: Listing;

    dateFormControl = new FormControl('', [
        Validators.required,
    ]);

    timeFormControl = new FormControl('', [
        Validators.required,
    ]);
    paceFormControl = new FormControl('', [
        Validators.required,
    ]);
    @ViewChild('type') type: any;
    @ViewChild('title') title: any;
    @ViewChild('route') route: any;
    @ViewChild('pace') pace: any;

    constructor(
        private userService: UserService,
        private routesService: RouteService,
        private notificationsService: NotificationsService,
        private utils: UtilsService,
        public router: Router,
    ) { }

    ngOnInit() {
        const today = moment();
        const tomorrow = moment(today).add(1, 'days');
        this.defaultListing = new Listing(0, '', '', '', tomorrow, '', '', new RouteItem());

        this.type.control.markAsTouched();
        
        this.type.control.markAsDirty();
        console.log(this.type)
        // this.test.control.markAsTouched();
        // this.test.control.markAsDirty();
        

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

        this.listing = this.defaultListing;
    }

    routeListView() {
        this.routesService.selectedRouteSubject.next(new RouteList());
    }
    
    submitEntry() {
        this.isSubmitting = true;
        const route = this.currentRouteList.find((route) => route.id === this.listing.route.id);
        const time24hr = moment(this.listing.time, ["h:mm A"]).format("HH:mm");
        const date = this.listing.date
                        .hour(Number(time24hr.split(':')[0]))
                        .minutes(Number(time24hr.split(':')[1]))

        let listingData = new Listing(
             0,
             this.listing.type,
             this.listing.title,
             this.listing.pace,
             this.listing.date,
             this.listing.time,
             this.listing.info,
             route,
        )
        
        this.routesService
        .submitListing(listingData)
        .subscribe(
            listing => {
                console.log(listing);
                this.isSubmitting = false;
                this.listing = this.defaultListing;
                this.router.navigate(['/']);
            },
            errors => {
                this.isSubmitting = false;
                this.notificationsService.error('Error', 'There was a problem saving.')
                
            }
        );
    }
}