import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import {
    // UserService,
    // RouteService,
    MapService,
    ListingService
} from '../../core/services/index';
import { Listing } from '../../core/models/index';

@Component({
	selector: 'listing',
	templateUrl: './listing.component.html',
	styleUrls: ['./listing.component.scss']
})

export class ListingComponent implements OnInit {
key = AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
smallMap = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/pin-s-a+9ed4bd(-122.46589,37.77343),pin-s-b+000(-122.42816,37.75965),path-5+f44-0.7(%7DrpeFxbnjVsFwdAvr@cHgFor@jEmAlFmEMwM_FuItCkOi@wc@bg@wBSgM)/auto/140x90?access_token=' + this.key;

constructor(
	// private userService: UserService,
	private mapService: MapService,
	private listingService: ListingService,
	private router: Router,
) { }
	searchOptions = [ 
		{
			name: 'Zip Code',
			value: 'ZipCode'
		},
		{
			name: 'City/State',
			value: 'CityState'
		}	
	];
	currentListings: Listing[];
	searchBy: any;
	filterRides = {type: '1'};
	filterRuns = {type: '2'};
	
	ngOnInit() {
		this.searchBy = this.searchOptions[0].value;
		this.listingService.currentListings.subscribe(
            (listingData: Listing[]) => {
                this.currentListings = listingData;
            }
        )
	}
	private getSmallMap(encodedPolyline: string) {
		return 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/path('
		+ encodeURIComponent(encodedPolyline)
		+ ')/auto/140x90?access_token='
		+ AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
	}
	private displayTime(time: string): string {
		return time[0] === '0' ? time.slice(1) : time;
	}

	private viewListing(listing: Listing): void {
		this.mapService.clearSelectedMap();
		this.mapService.setSelectedMap(listing._id);
		this.listingService.updateSelectedSubject(listing);
		this.router.navigateByUrl('/listing');
	}

}
