import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SettingsModule } from './settings/settings.module';
import { UserConfirmComponent } from './user-confirm/user-confirm.component';


@NgModule({
	declarations: [ 
		AppComponent,
		HeaderComponent,
		UserConfirmComponent
	],
	imports: [
		HomeModule,
		SettingsModule,
		CoreModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatToolbarModule,
		MatMenuModule,
		MatDialogModule,
		FlexLayoutModule,
		BrowserAnimationsModule,
		MatProgressSpinnerModule,
		
	],
	providers: [
		// {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, direction: 'ltr'}}
	],
	bootstrap: [AppComponent],
	entryComponents: [UserConfirmComponent]
})
export class AppModule { }
