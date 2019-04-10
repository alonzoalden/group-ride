import { Component } from '@angular/core';
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
	) { }
	ngOnInit() {
	}
	ngAfterViewInit() {
		// setTimeout(() => {
        //     // this.bounds = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
        //     this.bounds = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
        // }, 2000)
        
        // this.userService.currentUser.subscribe((userData: User) => {
		// 	this.currentUser = userData;
        //     // this.bounds = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
        //     console.log(userData)
        //     // this.bounds = [userData.location_coords[0], userData.location_coords[1]];
        // // setTimeout(() => {
        // //     // this.bounds = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
        // //     this.bounds = [[50, 50], [51, 51]];
        // // }, 2000)
		// });

        this.listingService.currentListings.subscribe(
            (listingData: Listing[]) => {
                this.currentListings = listingData;
            }
        )

        // var singleobject = { name: 'Location A', category: 'Store', street: 'Market', lat: 34.05, lng: -118.24 };
        // var a = GeoJSON.parse(singleobject, {Point: ['lat', 'lng']});
        

	}
}