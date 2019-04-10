import { Injectable } from '@angular/core';
// import { keys as AUTH_CONFIG } from '../../../../env-config';
// import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map, distinctUntilChanged } from 'rxjs/operators';
// import { ApiService } from './api.service';
// import { UserService } from './user.service';
import {
	User,
    RouteList,
    Listing
} from '../models/index';

@Injectable()

export class MapService {
    public selectedMap: string;
    public startViewBounds: any;
    public listingViewBounds: any;
    
	constructor(
    ) {}
    
    setSelectedMap(id) {
        this.selectedMap = id;
    }
    clearSelectedMap() {
        this.selectedMap = '';
    }

    setStartViewBounds(bounds) {
        const newBounds = [
            [+bounds[0] - 1, +bounds[1] - 1],
            [+bounds[0] + 1, +bounds[1] + 1]
        ]
        this.startViewBounds = newBounds;
    }
    clearStartViewBounds() {
        this.startViewBounds = '';
    }

    setListingViewBounds(bounds) {
        this.listingViewBounds = bounds;
    }
    clearListingViewBounds() {
        this.listingViewBounds = '';
    }
}
