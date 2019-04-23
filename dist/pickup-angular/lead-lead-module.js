(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lead-lead-module"],{

/***/ "./src/app/lead/lead-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/lead/lead-routing.module.ts ***!
  \*********************************************/
/*! exports provided: LeadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadRoutingModule", function() { return LeadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var LeadRoutingModule = /** @class */ (function () {
    function LeadRoutingModule() {
    }
    LeadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LeadRoutingModule);
    return LeadRoutingModule;
}());



/***/ }),

/***/ "./src/app/lead/lead.module.ts":
/*!*************************************!*\
  !*** ./src/app/lead/lead.module.ts ***!
  \*************************************/
/*! exports provided: LeadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadModule", function() { return LeadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lead_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lead.component */ "./src/app/lead/lead.component.ts");
/* harmony import */ var _lead_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead-routing.module */ "./src/app/lead/lead-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route/route.component */ "./src/app/lead/route/route.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LeadModule = /** @class */ (function () {
    function LeadModule() {
    }
    LeadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _lead_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeadRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
            ],
            declarations: [
                _lead_component__WEBPACK_IMPORTED_MODULE_2__["LeadComponent"],
                _route_route_component__WEBPACK_IMPORTED_MODULE_5__["RouteComponent"],
            ],
            providers: []
        })
    ], LeadModule);
    return LeadModule;
}());



/***/ })

}]);
//# sourceMappingURL=lead-lead-module.js.map