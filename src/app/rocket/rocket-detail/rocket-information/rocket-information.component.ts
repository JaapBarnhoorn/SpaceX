import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
// import { Rocket } from '../rocket-detail.component'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-rocket-information',
  templateUrl: './rocket-information.component.html',
  styleUrls: ['./rocket-information.component.css']
})
export class RocketInformationComponent implements OnInit {
  rocket: any;


  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((route: ParamMap) => {
      const id = route.get('id') as string;
      this.getRocket(id)
      console.log(route)
    })
    // this.getRocket(id)
  }

  getRocket(id: string) {
    this.httpClient.get<any>(`https://api.spacexdata.com/v3/launches/${id}`).subscribe(
      response => {
        console.log(response);
        this.rocket = response
      }
    )
  }

}
