import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';


const jwtHelper = new JwtHelperService();

@Injectable()
export class AuthService {

  user: any;
  authToken: any;
  userObs;

  constructor(
    private http: HttpClient
  ) { }

  apiUrl = environment.apiUrl;

  /*------------------------------------------------------------------------*/

  userActiv = new Subject();
  readuser() {
    this.userActiv.next(localStorage.getItem('user'));
  }

  /*------------------------------------------------------------------------*/

  checkLogin() {
    if (localStorage.getItem('user') && jwtHelper.isTokenExpired(localStorage.getItem('data.token'))) {
      return true
    } else {
      return false
    }
  }

  /*------------------------------------------------------------------------*/
  register(user) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(`${this.apiUrl}/user/signup`, user, httpOptions);
  }


  /*------------------------------------------------------------------------*/
  authenticate(user) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(`${this.apiUrl}/user/login`, user, httpOptions);

  }

  /*------------------------------------------------------------------------*/
  localUserStore(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.user.username);
    this.user = data.user.username;
    this.authToken = data.token;

    this.readuser();
  }

  /*------------------------------------------------------------------------*/
  logout() {
    this.user = null;
    this.authToken = null;
    localStorage.clear();

    this.readuser();
  }
  /*------------------------------------------------------------------------*/
}
