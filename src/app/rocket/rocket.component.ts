import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
 filteredStatus = '';

  constructor() { }

  ngOnInit(): void {

  }

  listen(data: any) {
  this.filteredStatus = data;
  }

}
