import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Rocket {
  constructor(
    public rocket: {
      rocket_name: string,
      second_stage: {
        payloads:  { 
          [0]: {
            payload_type: string,
          },
          }, 
      }, 
    },
    public flight_id: string,
    public rocket_name: string,
    public payload_type: string,
    public launch_year: number,
    public flight_number: number,
    public rocket_type: string,
    public land_success: boolean,
    public launch_success: boolean,
    public customers: string,
    public nationality: string,
    public manufacturer: string
  ) { 
   }
  }



@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.css']
})
export class RocketDetailComponent implements OnInit {
filteredStatus = ''
rockets: Rocket[]

  constructor(
   private httpClient: HttpClient
  ) { }

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
 