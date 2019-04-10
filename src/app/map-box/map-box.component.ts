import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
    UserService,
    // RouteService,
    MapService,
    ListingService
} from '../core/services/index';
import { Listing, User } from '../core/models/index';
import * as polyline from '@mapbox/polyline';
declare var require: any;

@Component({
    selector: 'map-box',
    styles: [ require('./map-box.component.scss') ],
    template: require('./map-box.component.html'),
})
export class MapBoxComponent {
    currentUser: User;
    
    currentListings: Listing[];

	constructor(
        private userService: UserService,
        private mapService: MapService,
        private listingService: ListingService,
        private router: Router,
	) { }
	ngOnInit() {
	}
	ngAfterViewInit() {
        this.listingService.currentListings.subscribe(
            (listingData: Listing[]) => {
                this.currentListings = listingData;
            }
        )
    }
    private viewListing(listing: Listing): void {
		this.listingService.updateSelectedSubject(listing);
		this.router.navigateByUrl('/listing');
    }
    private trackFn(idx: number, data: any) {
        return data._id;
    }
}