import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
@NgModule({
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
export class SettingsModule { }
