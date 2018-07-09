import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required])
    })
  }

  register(){
    const user= this.registerForm.value;
    //console.log(user);

    this.authService.register(user).subscribe(
      (result)=>{
        console.log(result);
        this.snackBar.open('register succesfull', 'ok', { duration: 2000 });
        this.router.navigate(['/login']);
      },
      (err)=>{
        if(err){
          this.snackBar.open(err.error.message, 'ok', { duration: 2000 });
          console.log(err);
        }
      }
    );
  }

}
