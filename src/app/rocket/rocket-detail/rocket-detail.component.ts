import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Rocket } from '../rocket.module'
import { RocketService } from '../../rocket.service'


@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.css']
})
export class RocketDetailComponent implements OnInit {
@Input() filteredStatus = '';
rockets: any[];


  constructor(
   private httpClient: HttpClient,  private rocketService: RocketService) { }

  ngOnInit(): void {
    this.onGetRocket()
  }

  onGetRocket() {
    this.rocketService.getRockets().subscribe(
     response => {
        this.rockets = response;}
    )
  }


}
