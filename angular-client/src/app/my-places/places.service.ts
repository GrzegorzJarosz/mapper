import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlacesService{

  apiUrl:string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ){}

  getMyPlaces(){
    return this.http.get(`${this.apiUrl}/places`);
  }

}
