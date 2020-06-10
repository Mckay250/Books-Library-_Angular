import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  private userData;
  public thisUser;
  jwt;
  public httpOptions = {
      headers: new HttpHeaders({
        'Authorization' : this.jwt
      })
  };

  constructor( private http: HttpClient,
                private _router: Router) { 
                }

  getInitUser() {
    return this.userData;
  }

  registerUser(user) {
    return this.http.post<any>('http://localhost:1196/auth/addUser', user);
  }

  login(user) {
    return (this.http.post<any>("http://localhost:1196/authenticate", user));
  }

  getUser(userData) {
    return this.http.post<any>("http://localhost:1196/auth/getUser", userData);
  }

  logoutUser() {
    localStorage.removeItem('bearer')
    localStorage.removeItem('User Role')
    this._router.navigate(['/auth'])
  }

  loggedIn() {
    return !!localStorage.getItem("token")
  }

  isAdmin() {
    return localStorage.getItem('role') === 'ADMIN'
  }

  getToken() {
    return localStorage.getItem('token')
  }

  // handleError<T>(arg0: string, arg1: undefined[]): (err: any, caught: Observable<[]>) => import("rxjs").ObservableInput<any> {
  //   throw new Error("Method not implemented.");
  // }

}
