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
	constructor(
    ) {}
    
    setSelectedMap(id) {
        this.selectedMap = id;
    }
    clearSelectedMap() {
        this.selectedMap = '';
    }
}
