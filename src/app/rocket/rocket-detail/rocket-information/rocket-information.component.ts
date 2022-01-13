import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Rocket } from '../rocket-detail.component'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-rocket-information',
  templateUrl: './rocket-information.component.html',
  styleUrls: ['./rocket-information.component.css']
})
export class RocketInformationComponent implements OnInit {
  // rocket: { id: any, title: any }; 
  @Input() rockets: Rocket []
  

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getRocket()
  }

  getRocket() {
    this.httpClient.get<any>(`https://api.spacexdata.com/v3/launches`).subscribe(
      response => {
        console.log(response);
        this.rockets = response
      }
    )
  }

}
