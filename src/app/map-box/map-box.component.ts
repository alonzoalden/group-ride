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
import * as geolib from 'geolib';
declare var require: any;

@Component({
    selector: 'map-box',
    styles: [ require('./map-box.component.scss') ],
    template: require('./map-box.component.html'),
})
export class MapBoxComponent {
    currentUser: User;
    
    currentListings: Listing[];
    selectedListing: Listing;

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
        this.listingService.selectedListing.subscribe(
            (listingData: Listing) => {
                this.selectedListing = listingData;
                if (listingData.route.map && listingData.route.map.polyline) this.getBounds();
            }
        )
    }
    private viewListing(listing: Listing): void {
        this.mapService.clearSelectedMap();
		this.mapService.setSelectedMap(listing._id);
		this.listingService.updateSelectedSubject(listing);
		this.router.navigateByUrl('/listing');
    }
    private getBounds() {
        const bounds = geolib.getBounds(this.selectedListing.route.map.polyline.data.coordinates);
        this.mapService.setListingViewBounds(bounds);
    }
    
}