import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


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

  ////---------------------------------------////

  private addStateEmiter = new Subject;

  setAddState(state: any) {
    this.addStateEmiter.next(state);
  }
  getAddState(): Observable<any> {
    return this.addStateEmiter.asObservable()
  }

  ///

  private selectedPlace = new Subject;

  setSelectedPlace(state: any) {
    this.selectedPlace.next(state);
  }
  getSelectedPlace(): Observable<any> {
    return this.selectedPlace.asObservable()
  }

  ////---------------------------------------////

  private refreshNeeded = new Subject<void>();

  get reloader() {
    return this.refreshNeeded;
  }

  ////---------------------------------------////

  getMyPlaces() {
    return this.http.get(`${this.apiUrl}/places/${localStorage.getItem('user')}`);
  }

  addNewPlace(dataPlace) {
    return this.http
      .post(`${this.apiUrl}/places/${localStorage.getItem('user')}`, dataPlace, httpOptions)
      .pipe(
        tap(() => {
          this.reloader.next();
        })
      );
  }

  removePlace(id) {
    return this.http.delete(`${this.apiUrl}/places/${localStorage.getItem('user')}/${id}`)
      .pipe(
        tap(() => {
          this.reloader.next();
        })
      );
  }

  editPlace(place) {
    return this.http.put(`${this.apiUrl}/places/${localStorage.getItem('user')}/${place._id}`, place, httpOptions)
      .pipe(
        tap(() => {
          this.reloader.next();
        })
      );;
  }

}
