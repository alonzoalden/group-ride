import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadComponent } from './lead.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { RouteComponent } from './route/route.component';
import { LeadFormComponent } from './form/form.component';
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  declarations: [
    LeadComponent, 
    RouteComponent, 
    LeadFormComponent
  ]
})
export class LeadModule { }
