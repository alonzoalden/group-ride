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
	userInGroup: Array<ListingMember>;
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
		this.userService.currentUser.subscribe((userData: User) => {
			this.currentUser = userData;
			
			this.listingService.selectedListing
				.subscribe((listingData: Listing) => {
					if (!listingData.date) return this.router.navigateByUrl('/');
					this.selectedListing = listingData;
					this.checkIfUserInGroup();
					this.isLoading = false;
				}
			)
		});
		
	}

	private submitJoinGroup(): void {
		if (!this.userService.isAuthenticated()) {
			this.notificationsService.error('Please Sign In', 'You must be signed in to join a ride.');
			return;
		}
		
		if (this.userInGroup[0]) {
			this.notificationsService.info('Already Joining', 'You\'re already joining this group.');
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

	private deleteListing(): void {
		this.listingService
			.deleteListing(this.selectedListing._id)
			.subscribe((data) => {
				console.log(data);
			});
	}
	

	private submitRemoveFromGroup(): void {
		this.listingService
			.removeListingMember(this.currentUser._id)
			.subscribe(() => {
				this.checkIfUserInGroup();
			});
	}
	private displayTime(time: string): string {
		return time[0] === '0' ? time.slice(1) : time;
	}
	private checkIfUserInGroup() {
		this.userInGroup = this.selectedListing.members
							.filter(item => item.user_id === this.currentUser._id);
	}
}
