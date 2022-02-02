// JAAP: in services folder zetten
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rocket } from './rocket/rocket.module';

@Injectable({
  providedIn: 'root',
})
export class RocketService {
  constructor(private httpClient: HttpClient) {}

  getRockets(): Observable<Rocket[]> {
    return this.httpClient.get<Rocket[]>(
      `https://api.spacexdata.com/v3/launches`
    );
  }

  getRocket(id: string) {
    return this.httpClient.get<Rocket>(
      `https://api.spacexdata.com/v3/launches/${id}`
    );
  }
}
