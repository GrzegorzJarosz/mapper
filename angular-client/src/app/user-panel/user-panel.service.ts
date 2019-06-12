import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserPanelService {

  apiUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }


  addCatPlace(newCat) {
    const cat = { "name": newCat }
    return this.http.post(`${this.apiUrl}/places/add_category/${localStorage.getItem('user')}`, cat, httpOptions)
  }

  getMyCatPlaces() {
    return this.http.get(`${this.apiUrl}/places/get_categories/${localStorage.getItem('user')}`);
  }

  removeCatPlace(id) {
    return this.http.delete(`${this.apiUrl}/places/removecatplace/${localStorage.getItem('user')}/${id}`)
  }

}
