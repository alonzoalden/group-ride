import { Injectable } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import {
	User,
    RouteList,
    Listing,
    RouteItem,
    ListingMember
} from '../models/index';

@Injectable()

export class ListingService {
    private newListingMember: ListingMember;

	private currentListingsSubject = new BehaviorSubject<Listing[]>(new Array<Listing>());
    public currentListings = this.currentListingsSubject.asObservable().pipe(distinctUntilChanged());
    public currentListingsLoaded: boolean = false;
    public currentListingsLoading: boolean = false;

    private selectedListingSubject = new BehaviorSubject<Listing>(new Listing(0, '', '', '', null, '', '', new RouteItem(), '', '', '', []));
	public selectedListing = this.selectedListingSubject.asObservable().pipe(distinctUntilChanged());
    
	constructor(
		public router: Router,
		private activatedRoute: ActivatedRoute,
		private apiService: ApiService,
        private userService: UserService,
	) {}
  
	public getListings() {
        this.currentListingsLoading = true;
        this.apiService.get(`listings`)
            .subscribe((listings: Listing[])=> {
                this.currentListingsSubject.next(listings);
                this.currentListingsLoaded = true;
                this.currentListingsLoading = false;
            })
		
    }

    public editListing(payload): Observable<Listing> {
        return this.apiService
            .put(`listing/${payload._id}`, payload)
            .pipe(map(data => data));
    }
    public submitListing(payload): Observable<Listing> {
        return this.apiService
            .post(`listing`, payload)
            .pipe(map(data => data));
    }

    public addListingMember(userid) {
        return this.apiService
            .post(`listing/${this.selectedListingSubject.value._id}/addMember/${userid}`)
            .pipe(map(data => {
                const listingMember = this.userService.getCurrentUser();
                const newListingMember = new ListingMember(
                    listingMember.firstname,
                    listingMember.lastname,
                    listingMember.profile_medium,
                    listingMember.city + ', ' + listingMember.state,
                    this.selectedListingSubject.value._id,
                    '',
                    userid,
                )
                let selectedListingData = this.selectedListingSubject.value;
                selectedListingData.members.push(newListingMember);
                this.selectedListingSubject.next(selectedListingData);
                // return this.selectedListingSubject.value;
            }))
    }

    public deleteListing(listingid) {
        return this.apiService
            .delete( `listing/remove/${listingid}`)
            .pipe(map(newMemberData => {
                return this.selectedListingSubject.value;
            }))
    }

    public removeListingMember(listingid, memberid) {
        return this.apiService
            .delete( `listing/${listingid}/removeMember/${memberid}`)
            .pipe(map(newMemberData => {
                let selectedListingData = this.selectedListingSubject.value;
                selectedListingData.members = newMemberData;
                this.selectedListingSubject.next(selectedListingData);
            }))
    }

    public addToCurrentListings(listing: Listing): void {
        this.currentListingsSubject.next([...this.currentListingsSubject.value, listing]);
	}
	public getCurrentListings(): Listing[] {
		return this.currentListingsSubject.value;
	}
	public getSelectedRoute(): Listing[] {
		return this.currentListingsSubject.value;
    }
    
    public updateSelectedSubject(listing: Listing): void {
        this.selectedListingSubject.next(listing);
	}
}
