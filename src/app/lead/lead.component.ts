import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { User, RouteItem, RouteList, Listing } from '../core/models/index';
import { slideInAnimation, fadeInOut } from '../animations';
import { NotificationsService } from 'angular2-notifications';
import { ValidationService } from './lead-validation.service';
import * as moment from 'moment';
import {
    UserService,
    RouteService,
    UtilsService,
    ListingService
} from '../core/services/index';

@Component({
    selector: 'lead',
    templateUrl: './lead.component.html',
    styleUrls: ['./lead.component.scss', '../home/home.component.scss'],
    animations: [
		slideInAnimation
	]
})
export class LeadComponent implements OnInit {
    currentUser: User;
    currentRouteList: RouteItem[];
    // date: any;
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
    @ViewChild('type') type: any;
    @ViewChild('title') title: any;
    @ViewChild('pace') pace: any;
    @ViewChild('time') time: any;
    @ViewChild('date') date: any;

    constructor(
        private userService: UserService,
        private routesService: RouteService,
        private notificationsService: NotificationsService,
        private validationService: ValidationService,
        private listingService: ListingService,
        private utils: UtilsService,
        public router: Router,
    ) { }

    ngOnInit() {
        
        const today = moment();
        const tomorrow = moment(today).add(1, 'days');
        

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

        this.listing = this.createNewListing();
    }

    routeListView() {
        this.routesService.selectedRouteSubject.next(new RouteList());
    }

    submitEntry() {
        this.isSubmitting = true;
        const formInputs = [
            this.type,
            this.title,
            this.pace,
            this.time,
            this.date
        ];
        formInputs.forEach(item => this.validationService.formInputs.push(item))
        if (!this.validationService.validate()) return this.isSubmitting = false;

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
             date,
             this.listing.time,
             this.listing.info,
             route,
             this.currentUser.firstname + ' ' + this.currentUser.lastname,
             this.currentUser.profile_medium,
             []
        )
        
        this.listingService
        .submitListing(listingData)
        .subscribe(
            listing => {
                this.listingService.addToCurrentListings(listing);
                this.isSubmitting = false;
                this.listing = this.createNewListing();
                this.notificationsService.success('Success', 'Your listing has been saved.')
                this.router.navigate(['/']);
            },
            errors => {
                this.isSubmitting = false;
                this.notificationsService.error('Error', 'There was a problem saving.')
            }
        );
        
    }
    createNewListing(): Listing {
        return new Listing(0, '', '', '', null, '', '', new RouteItem(), '', '', []);
    }
}