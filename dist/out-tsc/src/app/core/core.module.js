var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { ValidationService } from '../lead/lead-validation.service';
import { ApiService, JwtService, UserService, RouteService, UtilsService, ListingService, AuthGuard } from './services';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
                ApiService,
                JwtService,
                UserService,
                RouteService,
                UtilsService,
                ListingService,
                ValidationService,
                AuthGuard
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map