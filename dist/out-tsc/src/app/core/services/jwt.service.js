var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['id_token'];
    };
    JwtService.prototype.getAccessToken = function () {
        return window.localStorage['access_token'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['id_token'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('id_token');
    };
    JwtService = __decorate([
        Injectable()
    ], JwtService);
    return JwtService;
}());
export { JwtService };
//# sourceMappingURL=jwt.service.js.map