import { Component, OnInit } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { Router } from '@angular/router';
import {
    UserService,
	ListingService,
	MapService
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
	userExistsInGroup: Boolean;
	currentUser: User;
	
	constructor(
		private userService: UserService,
		private mapService: MapService,
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
					const listingViewCoordinates = listingData.route.map.polyline.data.coordinates;
					// this.mapService.startViewBounds = [
					// 	listingViewCoordinates[0],
					// 	listingViewCoordinates[listingViewCoordinates.length/2]
					// ];

					///
					console.log(listingViewCoordinates);
					///^^^
					const length = listingViewCoordinates.length / 2;
					this.mapService.startViewBounds = [
						[+listingViewCoordinates[length][0] - .25, +listingViewCoordinates[length][1] - .25],
						[+listingViewCoordinates[length][0] + .25, +listingViewCoordinates[length][1] + .25]
					];
					
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
		
		if (this.userExistsInGroup) {
			this.notificationsService.info('Already Joining', 'You\'re already joining this group.');
			return;
		}
		this.listingService
			.addListingMember(this.currentUser._id)
			.subscribe(data => {
				this.checkIfUserInGroup();
			});
			
	}

	private deleteListing(): void {
		this.listingService
			.deleteListing(this.selectedListing._id)
			.subscribe((deletedListingData) => {
				this.notificationsService.info('Listing Deleted', `${deletedListingData.title} has been removed.`);
				this.router.navigateByUrl('/');
				this.listingService.getListings();
			});
	}
	
	private editListing(): void {
		this.router.navigateByUrl('/listing/edit/' + this.selectedListing._id);
	}
	private submitRemoveFromGroup(): void {
		this.listingService
			.removeListingMember(this.selectedListing._id, this.currentUser._id)
			.subscribe((data) => {
				this.checkIfUserInGroup();
			});
	}
	private displayTime(time: string): string {
		return time[0] === '0' ? time.slice(1) : time;
	}
	private checkIfUserInGroup() {
		this.userExistsInGroup = !!this.selectedListing.members
							.filter(user => user._id === this.currentUser._id)[0];
	}
}
