var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { keys as AUTH_CONFIG } from '../../../env-config';
var UserConfirmComponent = /** @class */ (function () {
    function UserConfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    UserConfirmComponent.prototype.authorizeStrava = function () {
        window.location.href = "https://www.strava.com/oauth/authorize?client_id="
            + AUTH_CONFIG.STRAVA_CLIENT_ID + "&response_type=code&redirect_uri="
            + AUTH_CONFIG.DEV_URL + "?scope=write&state=mystate&approval_prompt=force";
    };
    UserConfirmComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UserConfirmComponent = __decorate([
        Component({
            selector: 'app-user-confirm',
            templateUrl: './user-confirm.component.html',
            styleUrls: ['./user-confirm.component.scss']
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object])
    ], UserConfirmComponent);
    return UserConfirmComponent;
}());
export { UserConfirmComponent };
//# sourceMappingURL=user-confirm.component.js.map