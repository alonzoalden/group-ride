import { Injectable } from '@angular/core';

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
        console.log('start view bunds');
    }
    clearStartViewBounds() {
        this.startViewBounds = '';
    }

    setListingViewBounds(bounds) {
        console.log('listing view bunds');
        const newBounds = [
            [+bounds.minLng - 0.05, +bounds.minLat - 0.05],
            [+bounds.maxLng + 0.05, +bounds.maxLat + 0.05]
        ]
        this.listingViewBounds = newBounds;
    }
    clearListingViewBounds() {
        this.listingViewBounds = '';
    }
}
