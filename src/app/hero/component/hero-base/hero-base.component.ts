import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v1',
  templateUrl: './hero-base.component.html',
  styleUrls: ['./hero-base.component.css']
})
export class HeroBaseComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor() {}

  ngOnInit() {}
}
