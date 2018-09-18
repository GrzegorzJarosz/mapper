import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class PlacesService{

  apiUrl:string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ){}

  getMyPlaces(){
    return this.http.get(`${this.apiUrl}/places/${localStorage.getItem('user')}`);
  }

  addNewPlace(dataPlace){
    const place = {
      lat: dataPlace.coords.coords.lat,
      lng: dataPlace.coords.coords.lng,
      description: dataPlace.descr,
      user:localStorage.getItem('user')
    }
    return this.http.post(`${this.apiUrl}/places/${localStorage.getItem('user')}`, place , httpOptions )
  }
}
