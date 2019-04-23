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
import { keys as AUTH_CONFIG } from '../../../../env-config';
var RideComponent = /** @class */ (function () {
    function RideComponent() {
        this.key = AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
        this.smallMap = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/pin-s-a+9ed4bd(-122.46589,37.77343),pin-s-b+000(-122.42816,37.75965),path-5+f44-0.7(%7DrpeFxbnjVsFwdAvr@cHgFor@jEmAlFmEMwM_FuItCkOi@wc@bg@wBSgM)/auto/140x90?access_token=' + this.key;
        this.searchOptions = [
            {
                name: 'Zip Code',
                value: 'ZipCode'
            },
            {
                name: 'City/State',
                value: 'CityState'
            }
        ];
    }
    RideComponent.prototype.ngOnInit = function () {
        this.searchBy = this.searchOptions[0].value;
    };
    RideComponent = __decorate([
        Component({
            selector: 'ride',
            templateUrl: './ride.component.html',
            styleUrls: ['./ride.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], RideComponent);
    return RideComponent;
}());
export { RideComponent };
//# sourceMappingURL=ride.component.js.map