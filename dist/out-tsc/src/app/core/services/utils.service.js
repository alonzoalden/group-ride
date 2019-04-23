var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    // This method is used to for the overflow correction from the Mat Side Nav Panel. -alonzo
    UtilsService.prototype.overflow = function (val) {
        var sideView = document.getElementsByClassName('ride-list')[0];
        var leaderContainer = document.getElementsByClassName('leader-container')[0];
        // This fixes side affects where the Y-scroll is set to 0 (top of the div),
        var pxFromTop = leaderContainer.getBoundingClientRect().top + window.scrollY - 50;
        if (val) {
            sideView.classList.add("overflow-visible");
            // auto scrolling to top is prevented by setting a
            // negative top margin to the actively scrolled Y distance.
            leaderContainer.style.marginTop = pxFromTop + 'px';
            return;
        }
        else {
            sideView.classList.remove("overflow-visible");
            leaderContainer.style.marginTop = 0 + 'px';
            return;
        }
    };
    UtilsService = __decorate([
        Injectable()
    ], UtilsService);
    return UtilsService;
}());
export { UtilsService };
//# sourceMappingURL=utils.service.js.map