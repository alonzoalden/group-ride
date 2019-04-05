import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import {
    UserService,
    RouteService,
    UtilsService,
    ListingService
} from '../../core/services/index';
import { RouteList, RouteItem, Listing } from '../../core/models/index';
import { ValidationService } from '../lead-validation.service';

@Component({
	selector: 'route',
	templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss']
})

export class RouteComponent implements OnInit {
    
    @ViewChild('selectedRouteVar') selectedRouteVar: any;
    @Input() model: RouteItem;
    @Output() modelChange = new EventEmitter<RouteItem>();

    routeData = {
        routes: new Array<RouteItem>(),
    };
    routes: Array<any>;
    selectedRoute: RouteItem;

    editListing: boolean;

    constructor(
        public router: Router,
        private routeService: RouteService,
        private validationService: ValidationService,
        private listingService: ListingService,
        private utils: UtilsService,
        private route: ActivatedRoute,
    ) { }
    
	ngOnInit() {
        this.validationService.formInputs.push(this.selectedRouteVar);
        this.routeData.routes.length = 2;
        this.routeService.currentRoutes.subscribe(
            data => {
                this.routes = data.routes;
            },
            err => console.log('error retrieving leader routes', err)
        )
        var listingid = this.route.snapshot.params['listingid'];
        this.editListing = this.router.url.includes('listing/edit') && listingid;
        if (this.editListing) {
            this.listingService.currentListings.subscribe(
                (listingData: Listing[]) => {
                    const listing = listingData.find((item) => item._id === listingid);
                    this.selectedRoute = listing.route;
                }
            )

        }
	}

    private selectRoute(route: RouteList) {
        this.routeService.selectedRouteSubject.next(route);
        this.router.navigate(['/lead/details']);
    }
    private getSmallMap(encodedPolyline: string) {
        return 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/path('
        + encodeURIComponent(encodedPolyline)
        + ')/auto/300x250?access_token='
        + AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
    }

    private convertToMiles(meter: number) {
        return (meter * 0.000621371).toFixed(1);
    }
    private convertToFeet(meter: number) {
        return (meter * 3.28084).toFixed(0);
    }
    private convertTomins(seconds: number) {
        return (seconds / 60).toFixed(0);
    }
}
