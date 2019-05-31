import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class PlacesService {

  apiUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getMyPlaces() {
    return this.http.get(`${this.apiUrl}/places/${localStorage.getItem('user')}`);
  }

  addNewPlace(dataPlace) {
    return this.http.post(`${this.apiUrl}/places/${localStorage.getItem('user')}`, dataPlace, httpOptions)
  }

  removePlace(id) {
    return this.http.delete(`${this.apiUrl}/places/${localStorage.getItem('user')}/${id}`);
  }

}
