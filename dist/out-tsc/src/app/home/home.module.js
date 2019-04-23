var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatButtonModule, MatDatepickerModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { RideComponent } from './ride/ride.component';
import { MapboxModule } from '../map-box/map-box.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeRoutingModule } from './home-routing.module';
import { MatToolbarModule, MatSelectModule, MatCardModule, } from '@angular/material';
import { LeadComponent } from '../lead/lead.component';
import { RouteComponent } from '../lead/route/route.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        NgModule({
            imports: [
                HomeRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                MapboxModule,
                MatFormFieldModule,
                MatToolbarModule,
                MatButtonModule,
                MatMenuModule,
                MatSidenavModule,
                MatProgressSpinnerModule,
                FlexLayoutModule,
                BrowserAnimationsModule,
                MatListModule,
                MatInputModule,
                MatSelectModule,
                MatCheckboxModule,
                MatTabsModule,
                MatCardModule,
                MatDatepickerModule,
                MatMomentDateModule,
                NgSelectModule,
                MatRadioModule,
                NgxMaterialTimepickerModule.forRoot()
            ],
            declarations: [
                HomeComponent,
                RideComponent,
                LeadComponent,
                RouteComponent
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
export { HomeModule };
//# sourceMappingURL=home.module.js.map