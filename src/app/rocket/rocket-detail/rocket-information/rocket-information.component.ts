import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { RocketService } from '../../../rocket.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-rocket-information',
  templateUrl: './rocket-information.component.html',
  styleUrls: ['./rocket-information.component.css']
})
export class RocketInformationComponent implements OnInit {
  rocket: any;


  constructor(private httpClient: HttpClient, private activatedRoute:
    ActivatedRoute, private rocketService: RocketService, private _location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((route: ParamMap) => {
      const id = route.get('id') as string;
      this.onGetRocket(id)
      console.log(route)
    })
    // this.getRocket(id)
  }

  onGetRocket(id: string) {
    this.rocketService.getRocket(id).subscribe(
     response => {
        this.rocket = response;}
    )
  }

  backClicked() {
    this._location.back()
  }
}

