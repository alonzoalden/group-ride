import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapBoxComponent } from './map-box.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { keys as AUTH_CONFIG } from '../../../env-config';

@NgModule({
  imports: [
    NgxMapboxGLModule.withConfig({
      accessToken: AUTH_CONFIG.MAPBOX_ACCESS_TOKEN
    }),
    CommonModule
  ],
	declarations: [
		MapBoxComponent
	],
	exports: [
    MapBoxComponent,
	]
})
export class MapboxModule {}