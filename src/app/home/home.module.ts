import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
// import { RideComponent } from './ride/ride.component';
import { MapboxModule } from '../map-box/map-box.module';
import {
	
} from '@angular/material'

@NgModule({
	imports: [
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
		MatInputModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
