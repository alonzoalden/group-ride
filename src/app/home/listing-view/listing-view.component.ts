import { Component, OnInit } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { Router } from '@angular/router';
import {
    UserService,
    // RouteService,
    // UtilsService,
    ListingService
} from '../../core/services/index';
import { Listing } from '../../core/models/index';

@Component({
	selector: 'listing-view',
	templateUrl: './listing-view.component.html',
	styleUrls: ['../home.component.scss']
})

export class ListingViewComponent implements OnInit {
key = AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
smallMap = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/pin-s-a+9ed4bd(-122.46589,37.77343),pin-s-b+000(-122.42816,37.75965),path-5+f44-0.7(%7DrpeFxbnjVsFwdAvr@cHgFor@jEmAlFmEMwM_FuItCkOi@wc@bg@wBSgM)/auto/140x90?access_token=' + this.key;

constructor(
	private userService: UserService,
	// private routesService: RouteService,
	private listingService: ListingService,
	private router: Router,
) { }
	
	selectedListing: Listing;
	isLoading: boolean;
	ngOnInit() {
		this.isLoading = true;
		this.listingService.selectedListing.subscribe(
            (listingData: Listing) => {
				if (!listingData.date) return this.router.navigateByUrl('/');
				this.selectedListing = listingData;
				this.isLoading = false;
            }
        )
	}

	private displayTime(time: string): string {
		return time[0] === '0' ? time.slice(1) : time;
	}

}
