import { AuthenticationService } from './../../services/auth-service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = {
    email : '',
    password : '',
  }

  constructor( private router: Router,
                private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.auth.login(this.signInForm)
      .subscribe(
        res => {
          localStorage.setItem('bearer', res);
            this.auth.getUser(this.signInForm)
            .subscribe(
              res => {
                localStorage.setItem('role', res.role);
                this.router.navigate(['home'])},
                err => console.log(err)
            )},
        err => alert('incorect password or email, try again!')
      )
  }

  signUp() {
    this.router.navigate(['auth/signup']);
  }
}
