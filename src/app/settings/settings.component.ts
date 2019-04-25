import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/index';
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
        public user: UserService,
        private routes: RouteService
    ) { }

    ngOnInit() {
        
    }

    

}