import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/index';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations'

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
  ) { }

  ngOnInit() {
  }
  prepareRoute(outlet: RouterOutlet) {
    
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}
