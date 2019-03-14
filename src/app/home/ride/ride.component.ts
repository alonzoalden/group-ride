import { Component, OnInit } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import {
    // UserService,
    // RouteService,
    // UtilsService,
    ListingService
} from '../../core/services/index';
import { Listing } from '../../core/models/index';

@Component({
	selector: 'ride',
	templateUrl: './ride.component.html',
	styleUrls: ['./ride.component.scss']
})

export class RideComponent implements OnInit {
key = AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
smallMap = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/pin-s-a+9ed4bd(-122.46589,37.77343),pin-s-b+000(-122.42816,37.75965),path-5+f44-0.7(%7DrpeFxbnjVsFwdAvr@cHgFor@jEmAlFmEMwM_FuItCkOi@wc@bg@wBSgM)/auto/140x90?access_token=' + this.key;

constructor(
	// private userService: UserService,
	// private routesService: RouteService,
	private listingService: ListingService,
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
	ngOnInit() {
		this.searchBy = this.searchOptions[0].value;
		this.listingService.getListings();
		
		this.listingService.currentListings.subscribe(
            (listingData: Listing[]) => {
				console.log(listingData, 'hehe');
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

}
