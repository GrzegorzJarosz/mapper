import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserPanelService {

  apiUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }


  getMyCatPlaces() {
    return this.http.get(`${this.apiUrl}/places/get_categories/${localStorage.getItem('user')}`);
  }

  removeCatPlace(id) {
    return this.http.delete(`${this.apiUrl}/places/removecatplace/${localStorage.getItem('user')}/${id}`)
  }

}
