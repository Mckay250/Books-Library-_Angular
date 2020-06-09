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

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.router.navigate(['auth'])
  }

}
