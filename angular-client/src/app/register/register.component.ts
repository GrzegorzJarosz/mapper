import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
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
        console.log(result)
        this.router.navigate(['/login']);
      },
      (err)=>{
        if(err){
          console.log(err.status)
        }
      }
    );
  }

}
