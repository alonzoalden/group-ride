import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/index';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
