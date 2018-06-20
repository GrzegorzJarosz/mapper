import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  user;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required])
    });
  }

  login(){
    const user = this.loginForm.value;
    //console.log(user);

    this.authService.authenticate(user).subscribe(
      (result)=>{
        // console.log(result);
        this.authService.localUserStore(result);
        this.router.navigate(['/']);
      },
      (err)=>{
        if(err){
        console.log(err.status)
        }
      }
    );
  }

}
