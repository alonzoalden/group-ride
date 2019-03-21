import { Component, OnInit } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { Router } from '@angular/router';
import {
    UserService,
    // RouteService,
    // UtilsService,
    ListingService
} from '../../core/services/index';
import { Listing, ListingMember, User } from '../../core/models/index';
import { NotificationsService } from 'angular2-notifications';
@Component({
	selector: 'listing-view',
	templateUrl: './listing-view.component.html',
	styleUrls: ['../home.component.scss']
})

export class ListingViewComponent implements OnInit {
	key = AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
	smallMap = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/pin-s-a+9ed4bd(-122.46589,37.77343),pin-s-b+000(-122.42816,37.75965),path-5+f44-0.7(%7DrpeFxbnjVsFwdAvr@cHgFor@jEmAlFmEMwM_FuItCkOi@wc@bg@wBSgM)/auto/140x90?access_token=' + this.key;
	selectedListing: Listing;
	isLoading: boolean;
	currentUser: User;

	constructor(
		private userService: UserService,
		// private routesService: RouteService,
		private listingService: ListingService,
		private router: Router,
		private notificationsService: NotificationsService,
	) { }
	
	
	ngOnInit() {
		this.isLoading = true;
		this.listingService.selectedListing.subscribe(
            (listingData: Listing) => {
				if (!listingData.date) return this.router.navigateByUrl('/');
				this.selectedListing = listingData;
				this.isLoading = false;
            }
		)
		this.userService.currentUser.subscribe((userData: User) => this.currentUser = userData);
	}

	private submitJoinGroup(): void {
		// if (!this.userService.isAuthenticated()) {
		// 	this.notificationsService.error('Error', 'You must be signed in to join a ride.');
		// 	return;
		// }
		const joinGroupData = new ListingMember(
			0, 
			this.currentUser.firstname,
			this.currentUser.lastname,
			this.currentUser.profile_medium,
			this.currentUser.city + ', ' + this.currentUser.state,
			this.selectedListing._id,
		)
		this.listingService
			.addListingMember(joinGroupData)
			.subscribe()
		//take Model of GroupMember { profile_medium, firstname, lastname, location, _id: {{from listing._id}} }
		//send it to api addGroupMember
		
		//in back end take object and attach it in the array for the listing.
		//return object to client and update listing service selectedListing
	}
	private displayTime(time: string): string {
		return time[0] === '0' ? time.slice(1) : time;
	}

}
