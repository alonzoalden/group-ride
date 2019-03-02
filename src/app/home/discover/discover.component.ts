import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/index';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'discover',
  templateUrl: './discover.component.html',
  styleUrls: ['../home.component.scss', '../../map-box/map-box.component.scss']
})
export class DiscoverComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
