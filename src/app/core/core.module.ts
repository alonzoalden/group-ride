import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { ValidationService } from '../lead/lead-validation.service';
import {
  ApiService,
  JwtService,
  UserService,
  RouteService,
  UtilsService,
  AuthGuard
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    JwtService,
    UserService,
    RouteService,
    UtilsService,
    ValidationService,
    AuthGuard
  ],
  declarations: []
})
export class CoreModule { }