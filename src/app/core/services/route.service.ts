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

export class RouteService {

	private currentRoutesSubject = new BehaviorSubject<RouteList>(new RouteList());
	public currentRoutes = this.currentRoutesSubject.asObservable().pipe(distinctUntilChanged());

	public selectedRouteSubject = new BehaviorSubject<RouteList>(new RouteList());
	public selectedRoute = this.selectedRouteSubject.asObservable().pipe(distinctUntilChanged());

	constructor(
		public router: Router,
		private activatedRoute: ActivatedRoute,
		private apiService: ApiService,
		private user: UserService
	) {}
  
	public getLeaderRoutes() {
		if (this.user.getCurrentUser()._id) {
			this.apiService.get(`user/routes/${this.user.getCurrentUser()._id}`)
				.subscribe((routes: RouteList)=> {
					this.currentRoutesSubject.next(routes);
				})
		}
    }

    public submitListing(payload): Observable<Listing> {
        return this.apiService
        .post(
          `listing`,
          payload
        ).pipe(map(data => data.listing));
      }

	public getCurrentLeaderRoutes(): RouteList {
		return this.currentRoutesSubject.value;
	}

	public getSelectedRoute(): RouteList {
		return this.selectedRouteSubject.value;
	}
}
