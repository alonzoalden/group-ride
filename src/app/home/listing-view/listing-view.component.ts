import { Component, OnInit } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { Router } from '@angular/router';
import {
    UserService,
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
		const userExistsInGroup = this.selectedListing.members.filter(item => item.user_id === this.currentUser._id);
		if (userExistsInGroup[0]) {
			this.notificationsService.info('Already Joining', 'You\'re already joining this group.');
			return;
		}
		if (!this.userService.isAuthenticated()) {
			this.notificationsService.error('Error', 'You must be signed in to join a ride.');
			return;
		}
		const joinGroupData = new ListingMember(
			0,
			this.currentUser.firstname,
			this.currentUser.lastname,
			this.currentUser.profile_medium,
			this.currentUser.city + ', ' + this.currentUser.state,
			this.selectedListing._id,
			this.currentUser._id,
		)
		this.listingService
			.addListingMember(joinGroupData);
	}
	private displayTime(time: string): string {
		return time[0] === '0' ? time.slice(1) : time;
	}

}
