import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  user;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  login() {
    const user = this.loginForm.value;

    this.authService.authenticate(user).subscribe(
      (result) => {
        this.authService.localUserStore(result);
        this.snackBar.open('you are logged now', 'ok', { duration: 2000 });
        this.router.navigate(['/']);
      },
      (err) => {
        if (err) {
          console.log(err);
          this.snackBar.open(err.error.message, 'ok', { duration: 2000 });
        }
      }
    );
  }


}
