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
    Listing
} from '../models/index';

@Injectable()

export class ListingService {

	private currentListingsSubject = new BehaviorSubject<Listing[]>(new Array<Listing>());
	public currentListings = this.currentListingsSubject.asObservable().pipe(distinctUntilChanged());

	constructor(
		public router: Router,
		private activatedRoute: ActivatedRoute,
		private apiService: ApiService,
		private user: UserService
	) {}
  
	public getListings() {
        this.apiService.get(`listings`)
            .subscribe((listings: Listing[])=> {
                console.log(listings);
                this.currentListingsSubject.next(listings);
            })
		
    }

    public submitListing(payload): Observable<Listing> {
        return this.apiService
            .post(
                `lead`,
                payload
            ).pipe(map(data => data));
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
}
