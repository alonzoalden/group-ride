import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import {
    UserService,
    RouteService
} from '../../core/services/index';
import { Route, RouteItem } from '../../core/models/index';

@Component({
	selector: 'route',
	templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss']
})

export class RouteComponent implements OnInit {

    routeData = {
        routes: new Array<RouteItem>(),
    };
    
    constructor(
        public router: Router,
        private user: UserService,
        private routeService: RouteService
    ) { }
    
	ngOnInit() {
        this.routeData.routes.length = 2;
        console.log(this.routeData.routes);
        this.routeService.currentRoutes.subscribe(
            data => {
                //this.routeData.routes = data.routes;
                if (data.routes) {
                    data.routes.forEach( (item, i) => {
                        this.routeData.routes[i] = item;
                    });
                }
            },
            err => console.log('error retrieving leader routes', err)
        )
	}

    private selectRoute(route: Route) {
        this.routeService.selectedRouteSubject.next(route);
        this.router.navigate(['/lead/details']);
    }
    private getSmallMap(encodedPolyline: string) {
        return 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/path('
        + encodeURIComponent(encodedPolyline)
        + ')/auto/300x250?access_token='
        + AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
    }


    private isLoaded() {
        console.log('BALLZ');
    }
    private convertToMiles(meter: number) {
        return (meter * 0.000621371).toFixed(1);
    }
    private convertToFeet(meter: number) {
        return (meter * 3.28084).toFixed(0);
    }
}
