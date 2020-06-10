import { AuthenticationService } from './../../services/auth-service/authentication.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
  };

  constructor( private router: Router,
                private auth: AuthenticationService) {}
                
  ngOnInit(): void {
  }

  signUp() {
    this.auth.registerUser(this.signUpForm)
      .subscribe(
        res => {
          alert(res);
          this.signIn();
        },
        err => alert('there was an error submitting your details, try again!')
      )
  }

  signIn() {
    this.router.navigate(['auth'])
  }

}
