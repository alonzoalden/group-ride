var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SettingsModule } from './settings/settings.module';
import { UserConfirmComponent } from './user-confirm/user-confirm.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './shared/snackbar/snackbar.component';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SimpleNotificationsModule } from 'angular2-notifications';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                UserConfirmComponent,
                SnackBarComponent
            ],
            imports: [
                HomeModule,
                SettingsModule,
                CoreModule,
                FormsModule,
                ReactiveFormsModule,
                AppRoutingModule,
                HttpClientModule,
                MatButtonModule,
                MatToolbarModule,
                MatMenuModule,
                MatDialogModule,
                FlexLayoutModule,
                MatProgressSpinnerModule,
                MatSnackBarModule,
                MatMomentDateModule,
                BrowserModule,
                BrowserAnimationsModule,
                NgxMaterialTimepickerModule.forRoot(),
                SimpleNotificationsModule.forRoot()
            ],
            providers: [
                // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, direction: 'ltr'}}
                { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
            ],
            bootstrap: [AppComponent],
            entryComponents: [UserConfirmComponent, SnackBarComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map