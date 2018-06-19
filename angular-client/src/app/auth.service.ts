import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  }  from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import{ Subject }from'rxjs/Subject';

@Injectable()
export class AuthService{

  user: any;
  authToken: any;
  userObs;

  constructor(private http: HttpClient){}

  apiUrl:string = 'http://localhost:3000';

/*------------------------------------------------------------------------*/

  userActiv = new Subject();
  readuser(){
    this.userActiv.next(localStorage.getItem('user'));
  }

/*------------------------------------------------------------------------*/

  checkLogin(){
    if(localStorage.getItem('user')){
      return true
    } else {
      return false
    }
  }

/*------------------------------------------------------------------------*/
  register(user){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this.http.post(`${this.apiUrl}/user/signup`, user, httpOptions);

  }


/*------------------------------------------------------------------------*/
  authenticate(user){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    return this.http.post(`${this.apiUrl}/user/login`, user, httpOptions);

  }

/*------------------------------------------------------------------------*/
  localUserStore(data){
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.user.username);
    this.user = data.user.username;
    this.authToken = data.token;

    this.readuser();
  }

/*------------------------------------------------------------------------*/
  logout(){
    this.user = null;
    this.authToken = null;
    localStorage.clear();

    this.readuser();
  }
/*------------------------------------------------------------------------*/
}
