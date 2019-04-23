var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                MatProgressSpinnerModule,
                FlexLayoutModule,
                SettingsRoutingModule
            ],
            declarations: [
                SettingsComponent
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());
export { SettingsModule };
//# sourceMappingURL=settings.module.js.map