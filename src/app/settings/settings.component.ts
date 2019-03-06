import { Component, OnInit } from '@angular/core';
import { User, Route } from '../core/models/index';
import { slideInAnimation, fadeInOut } from '../animations';
import {
    UserService,
    RouteService
} from '../core/services/index';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    animations: [
		slideInAnimation
	]
})
export class SettingsComponent implements OnInit {
    
    constructor(
        private user: UserService,
        private routes: RouteService
    ) { }

    ngOnInit() {
        
    }

    

}