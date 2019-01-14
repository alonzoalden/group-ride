import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
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

import {
	
} from '@angular/material';

@NgModule({
	imports: [
		FormsModule,
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
		MatTabsModule
		
  ],
  declarations: [HomeComponent, RideComponent]
})
export class HomeModule { }
