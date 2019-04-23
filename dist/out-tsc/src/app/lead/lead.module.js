var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadComponent } from './lead.component';
import { LeadRoutingModule } from './lead-routing.module';
import { MatProgressSpinnerModule } from '@angular/material';
import { RouteComponent } from './route/route.component';
import { LeadFormComponent } from './form/form.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
var LeadModule = /** @class */ (function () {
    function LeadModule() {
    }
    LeadModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                MatProgressSpinnerModule,
                FlexLayoutModule,
                LeadRoutingModule,
                MatCardModule
            ],
            declarations: [
                LeadComponent,
                RouteComponent,
                LeadFormComponent
            ],
            providers: []
        })
    ], LeadModule);
    return LeadModule;
}());
export { LeadModule };
//# sourceMappingURL=lead.module.js.map