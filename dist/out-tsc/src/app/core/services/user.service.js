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
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import Auth0Lock from 'auth0-lock';
import { User } from '../models';
import { BehaviorSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { distinctUntilChanged } from 'rxjs/operators';
import { UserConfirmComponent } from '../../user-confirm/user-confirm.component';
var UserService = /** @class */ (function () {
    // public isAuthenticated = this.isAuthenticatedSubject.asObservable();
    function UserService(router, apiService, jwtService, activatedRoute, dialog) {
        this.router = router;
        this.apiService = apiService;
        this.jwtService = jwtService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, {
            oidcConformant: true,
            autoclose: true,
            auth: {
                redirectUrl: AUTH_CONFIG.callbackURL,
                responseType: 'token id_token',
                audience: "https://" + AUTH_CONFIG.domain + "/userinfo",
                params: {
                    scope: 'openid email'
                }
            }
        });
        this.currentUserSubject = new BehaviorSubject(new User());
        this.currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
        this.isAuthenticatedSubject = new ReplaySubject(1);
        this.isLoading = false;
    }
    UserService.prototype.login = function () {
        this.lock.show();
    };
    // Call this method in app.component.ts
    // if using path-based routing
    UserService.prototype.handleAuthentication = function () {
        var _this = this;
        this.lock.on('authenticated', function (authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                _this.router.navigate(['/']);
                _this.populate();
            }
        });
        this.lock.on('authorization_error', function (err) {
            _this.router.navigate(['/']);
            alert("Error: " + err.error + ". Check the console for further details.");
        });
    };
    UserService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        this.isLoading = true;
        // If JWT detected, attempt to get & store user's info
        if (this.isAuthenticated()) {
            this.apiService.get("user/" + this.jwtService.getAccessToken())
                .subscribe(function (data) { return _this.setUser(data.user); }, function (err) { return console.log('err'); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.logout();
        }
    };
    UserService.prototype.getAuthEmail = function () {
        var _this = this;
        this.apiService.get("user/authEmail/" + this.jwtService.getAccessToken())
            .subscribe(function (data) { return _this.setUser(data.user); }, function (err) { return console.log('err'); });
    };
    UserService.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(UserConfirmComponent, {
            width: '100%',
            height: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getAuthEmail();
        });
    };
    UserService.prototype.setUser = function (user) {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            var code = params['code'];
            if (_this.isAuthenticated()) {
                if (!code && !user) {
                    _this.openDialog();
                }
                else {
                    // Set current user data into observable
                    _this.currentUserSubject.next(user);
                    // Set isAuthenticated to true
                    _this.isAuthenticatedSubject.next(true);
                    _this.isLoading = false;
                }
            }
        });
    };
    UserService.prototype.createUser = function (code, accessToken) {
        var _this = this;
        var credentials = {
            code: code,
            accessToken: accessToken,
        };
        this.apiService.post("user/register", credentials)
            .subscribe(function (data) { return _this.setUser(data.user); }, function (err) { return console.log('err:', err); });
    };
    UserService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
        // Set current user to an empty object
        this.currentUserSubject.next(new User());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router,
            ApiService,
            JwtService,
            ActivatedRoute,
            MatDialog])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map