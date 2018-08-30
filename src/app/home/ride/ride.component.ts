import { Component, OnInit } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';

@Component({
	selector: 'ride',
	templateUrl: './ride.component.html',
	styleUrls: ['./ride.component.scss']
})

export class RideComponent implements OnInit {
key = AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
smallMap = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/pin-s-a+9ed4bd(-122.46589,37.77343),pin-s-b+000(-122.42816,37.75965),path-5+f44-0.7(%7DrpeFxbnjVsFwdAvr@cHgFor@jEmAlFmEMwM_FuItCkOi@wc@bg@wBSgM)/auto/140x90?access_token=' + this.key;
constructor() { }
  
	ngOnInit() {
	}

}
