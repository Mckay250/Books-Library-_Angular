import { AuthenticationService } from './../services/auth-service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdmin = false;
  isLoggedIn = false;

  constructor( private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin();
    this.isLoggedIn = this.auth.loggedIn();
  }

  logOut() {
    this.auth.logoutUser();
  }

}
