import { Component, OnInit } from '@angular/core';
import { ListingService } from '../core/services/index';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations'
import { Listing } from '../core/models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
		slideInAnimation
	]
})
export class HomeComponent implements OnInit {

  constructor(
    private listingService: ListingService,
  ) { }

  ngOnInit() {
    // this.listingService.getListings();
  }
  prepareRoute(outlet: RouterOutlet) {
    
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}
