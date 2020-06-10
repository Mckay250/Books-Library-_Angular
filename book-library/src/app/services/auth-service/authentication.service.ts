import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http: HttpClient,
                private router: Router) { }


  registerUser(user) {
    return this.http.post<any>('http://localhost:1196/auth/addUser', user);
  }

  login(user) {
    return (this.http.post<any>("http://localhost:1196/authenticate", user));
  }

  getUser(userData) {
    return this.http.post<any>("http://localhost:1196/auth/getUser", userData);
  }

  isAdmin() {
    return localStorage.getItem('role') === 'ADMIN'
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('bearer')
    localStorage.removeItem('User Role')
    this.router.navigate(['/auth'])
  }

  loggedIn() {
    return !!localStorage.getItem("token")
  }
}

