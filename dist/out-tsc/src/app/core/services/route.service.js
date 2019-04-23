var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { RouteList } from '../models/index';
var RouteService = /** @class */ (function () {
    function RouteService(router, activatedRoute, apiService, user) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.user = user;
        this.currentRoutesSubject = new BehaviorSubject(new RouteList());
        this.currentRoutes = this.currentRoutesSubject.asObservable().pipe(distinctUntilChanged());
        this.selectedRouteSubject = new BehaviorSubject(new RouteList());
        this.selectedRoute = this.selectedRouteSubject.asObservable().pipe(distinctUntilChanged());
    }
    RouteService.prototype.getLeaderRoutes = function () {
        var _this = this;
        if (this.user.getCurrentUser()._id) {
            this.apiService.get("user/routes/" + this.user.getCurrentUser()._id)
                .subscribe(function (routes) {
                _this.currentRoutesSubject.next(routes);
            });
        }
    };
    RouteService.prototype.submitListing = function (payload) {
        return this.apiService
            .post("lead", payload).pipe(map(function (data) { return data.listing; }));
    };
    RouteService.prototype.getCurrentLeaderRoutes = function () {
        return this.currentRoutesSubject.value;
    };
    RouteService.prototype.getSelectedRoute = function () {
        return this.selectedRouteSubject.value;
    };
    RouteService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            ApiService,
            UserService])
    ], RouteService);
    return RouteService;
}());
export { RouteService };
//# sourceMappingURL=route.service.js.map