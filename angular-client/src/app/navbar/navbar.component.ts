import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user;

  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    //displaying ame of user
    this.user = localStorage.getItem('user');
    this.authService.userActiv.subscribe(
      (user) => { this.user = user }
    )
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.snackBar.open('you are logged out', 'ok', { duration: 2000 });
  }

  ifLogged() {
    return this.authService.checkLogin();
  }

}
