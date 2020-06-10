import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdmin = false;
  isLoggedIn = false;

  constructor( private auth: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin();
    this.isLoggedIn = this.auth.loggedIn();
  }

}
