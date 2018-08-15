import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
	MatToolbarModule,
	MatMenuModule,
	MatButtonModule,
	MatTabsModule,
	MatSidenavModule,
	MatListModule,
	MatProgressSpinnerModule,
	MatDialogModule,
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [],
    exports: [
		FormsModule,
		MatTabsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		MatMenuModule,
		MatDialogModule,
		FlexLayoutModule,
		MatProgressSpinnerModule
    ]
})
export class SharedModule {}
