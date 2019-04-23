var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { RouteItem, RouteList, Listing } from '../core/models/index';
import { slideInAnimation } from '../animations';
import { NotificationsService } from 'angular2-notifications';
import { ValidationService } from './lead-validation.service';
import * as moment from 'moment';
import { UserService, RouteService, UtilsService } from '../core/services/index';
var LeadComponent = /** @class */ (function () {
    function LeadComponent(userService, routesService, notificationsService, validationService, utils, router) {
        this.userService = userService;
        this.routesService = routesService;
        this.notificationsService = notificationsService;
        this.validationService = validationService;
        this.utils = utils;
        this.router = router;
        this.dateFormControl = new FormControl('', [
            Validators.required,
        ]);
        this.timeFormControl = new FormControl('', [
            Validators.required,
        ]);
        this.paceFormControl = new FormControl('', [
            Validators.required,
        ]);
    }
    LeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var today = moment();
        var tomorrow = moment(today).add(1, 'days');
        this.defaultListing = new Listing(0, '', '', '', null, '', '', new RouteItem());
        var formInputs = [
            this.type,
            this.title,
            this.pace,
            this.time
        ];
        formInputs.forEach(function (item) { return _this.validationService.formInputs.push(item); });
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
            _this.routesService.getLeaderRoutes();
        });
        this.routesService.currentRoutes.subscribe(function (routeData) {
            _this.currentRouteList = routeData.routes;
        });
        this.levels = [
            {
                value: '1',
                name: 'Fun'
            },
            {
                value: '2',
                name: 'Race'
            }
        ];
        this.listing = this.defaultListing;
    };
    LeadComponent.prototype.routeListView = function () {
        this.routesService.selectedRouteSubject.next(new RouteList());
    };
    LeadComponent.prototype.s = function () {
    };
    LeadComponent.prototype.submitEntry = function () {
        var _this = this;
        this.isSubmitting = true;
        if (!this.validationService.validate())
            return this.isSubmitting = false;
        ;
        var route = this.currentRouteList.find(function (route) { return route.id === _this.listing.route.id; });
        var time24hr = moment(this.listing.time, ["h:mm A"]).format("HH:mm");
        var date = this.listing.date
            .hour(Number(time24hr.split(':')[0]))
            .minutes(Number(time24hr.split(':')[1]));
        var listingData = new Listing(0, this.listing.type, this.listing.title, this.listing.pace, date, this.listing.time, this.listing.info, route);
        this.routesService
            .submitListing(listingData)
            .subscribe(function (listing) {
            _this.isSubmitting = false;
            _this.listing = _this.defaultListing;
            _this.router.navigate(['/']);
        }, function (errors) {
            _this.isSubmitting = false;
            _this.notificationsService.error('Error', 'There was a problem saving.');
        });
    };
    __decorate([
        ViewChild('type'),
        __metadata("design:type", Object)
    ], LeadComponent.prototype, "type", void 0);
    __decorate([
        ViewChild('title'),
        __metadata("design:type", Object)
    ], LeadComponent.prototype, "title", void 0);
    __decorate([
        ViewChild('pace'),
        __metadata("design:type", Object)
    ], LeadComponent.prototype, "pace", void 0);
    __decorate([
        ViewChild('time'),
        __metadata("design:type", Object)
    ], LeadComponent.prototype, "time", void 0);
    LeadComponent = __decorate([
        Component({
            selector: 'lead',
            templateUrl: './lead.component.html',
            styleUrls: ['./lead.component.scss'],
            animations: [
                slideInAnimation
            ]
        }),
        __metadata("design:paramtypes", [UserService,
            RouteService,
            NotificationsService,
            ValidationService,
            UtilsService,
            Router])
    ], LeadComponent);
    return LeadComponent;
}());
export { LeadComponent };
//# sourceMappingURL=lead.component.js.map