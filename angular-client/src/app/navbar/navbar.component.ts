import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() onNavToggle = new EventEmitter<boolean>();

  user;

  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar
  ){ }

  ngOnInit() {
    //displaying ame of user
    this.user = localStorage.getItem('user');
    this.authService.userActiv.subscribe(
      (user)=>{this.user = user}
    )
  }

  onClick(){
    this.onNavToggle.emit(true);
  }

  onLogout(){
    this.authService.logout();
    this.snackBar.open('you are logged out', 'ok', { duration: 2000 });
  }

  ifLogged(){
    return this.authService.checkLogin();
  }

}
