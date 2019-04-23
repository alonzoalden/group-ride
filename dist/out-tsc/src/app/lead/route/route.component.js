var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { RouteService, UtilsService } from '../../core/services/index';
import { RouteItem } from '../../core/models/index';
import { ValidationService } from '../lead-validation.service';
var RouteComponent = /** @class */ (function () {
    function RouteComponent(router, routeService, validationService, utils) {
        this.router = router;
        this.routeService = routeService;
        this.validationService = validationService;
        this.utils = utils;
        this.modelChange = new EventEmitter();
        this.routeData = {
            routes: new Array(),
        };
    }
    RouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validationService.formInputs.push(this.selectedRouteVar);
        this.routeData.routes.length = 2;
        this.routeService.currentRoutes.subscribe(function (data) {
            _this.routes = data.routes;
        }, function (err) { return console.log('error retrieving leader routes', err); });
    };
    RouteComponent.prototype.selectRoute = function (route) {
        this.routeService.selectedRouteSubject.next(route);
        this.router.navigate(['/lead/details']);
    };
    RouteComponent.prototype.getSmallMap = function (encodedPolyline) {
        return 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/path('
            + encodeURIComponent(encodedPolyline)
            + ')/auto/300x250?access_token='
            + AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
    };
    RouteComponent.prototype.convertToMiles = function (meter) {
        return (meter * 0.000621371).toFixed(1);
    };
    RouteComponent.prototype.convertToFeet = function (meter) {
        return (meter * 3.28084).toFixed(0);
    };
    RouteComponent.prototype.convertTomins = function (seconds) {
        return (seconds / 60).toFixed(0);
    };
    __decorate([
        ViewChild('selectedRouteVar'),
        __metadata("design:type", Object)
    ], RouteComponent.prototype, "selectedRouteVar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", RouteItem)
    ], RouteComponent.prototype, "model", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], RouteComponent.prototype, "modelChange", void 0);
    RouteComponent = __decorate([
        Component({
            selector: 'route',
            templateUrl: './route.component.html',
            styleUrls: ['./route.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            RouteService,
            ValidationService,
            UtilsService])
    ], RouteComponent);
    return RouteComponent;
}());
export { RouteComponent };
//# sourceMappingURL=route.component.js.map