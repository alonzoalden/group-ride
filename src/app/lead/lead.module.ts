import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadComponent } from './lead.component';
import { LeadRoutingModule } from './lead-routing.module';
import { MatProgressSpinnerModule } from '@angular/material';
import { RouteComponent } from './route/route.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';

@NgModule({
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
    ],
    providers: [
        
    ]
})
export class LeadModule { }