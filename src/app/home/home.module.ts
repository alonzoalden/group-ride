import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { ListingComponent } from './listing/listing.component';
import { ListingViewComponent } from './listing-view/listing-view.component';
import { MapboxModule } from '../map-box/map-box.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeRoutingModule } from './home-routing.module';
import { 
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
} from '@angular/material';

import {

} from '@angular/material';
import { LeadComponent } from '../lead/lead.component';
import { RouteComponent } from '../lead/route/route.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
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
        ListingComponent,
        LeadComponent,
        RouteComponent,
        ListingViewComponent
    ]
})
export class HomeModule { }
