var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService, JwtService } from '../core/services';
import { NotificationsService } from 'angular2-notifications';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(user, jwt, notificationsService) {
        this.user = user;
        this.jwt = jwt;
        this.notificationsService = notificationsService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return !!this.jwt.getToken();
    };
    HeaderComponent.prototype.checkAuth = function () {
        if (!this.user.isAuthenticated()) {
            this.notificationsService.info('Please Sign In', 'You must sign in to lead a group.');
            // this.snackBar.openFromComponent(SnackBarComponent, {
            //     duration: 4000,
            // });
        }
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        __metadata("design:paramtypes", [UserService,
            JwtService,
            NotificationsService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map