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
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from './animations';
import { UserService, JwtService } from './core';
var AppComponent = /** @class */ (function () {
    function AppComponent(user, jwtService, activatedRoute) {
        this.user = user;
        this.jwtService = jwtService;
        this.activatedRoute = activatedRoute;
        this.options = {
            position: ['top', 'right'],
            timeOut: 3000,
            lastOnBottom: true,
            animate: 'rotate'
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParamMap.subscribe(function (params) {
            // let code = params['access_token'];
            var code = params.get('code');
            if (code) {
                console.log(code + 'xxxxxxxxx');
                _this.user.createUser(code, _this.jwtService.getAccessToken());
            }
            else {
                _this.user.handleAuthentication();
                if (_this.user.isAuthenticated()) {
                    _this.user.populate();
                }
            }
        });
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [
                slideInAnimation
            ]
        }),
        __metadata("design:paramtypes", [UserService,
            JwtService,
            ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map