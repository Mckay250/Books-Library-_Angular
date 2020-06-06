import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private registerUrl = "http://localhost:1196/auth/addUser";
  private loginUrl = "http://localhost:1196/authenticate";
  private userData;
  public thisUser;
  jwt;
  private _http: HttpClient;
  public httpOptions = {
      headers: new HttpHeaders({
        'Authorization' : this.jwt
      })
  };

  constructor( private http: HttpClient,
                private _router: Router) { 
                }

  setUser(user) {
    this.userData = user
  }

  getInitUser() {
    return this.userData;
  }

  registerUser(user) {
    return this._http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return (this._http.post<any>("http://localhost:1196/authenticate", user));
  }

  getUser() {
    return this.http.post<any>("http://localhost:1196/auth/getUser", this.userData);
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('User Role')
    this._router.navigate(['/auth'])
  }

  loggedIn() {
    return !!localStorage.getItem("token")
    // return false;
  }

  getToken() {
    return localStorage.getItem('token')
  }

  // handleError<T>(arg0: string, arg1: undefined[]): (err: any, caught: Observable<[]>) => import("rxjs").ObservableInput<any> {
  //   throw new Error("Method not implemented.");
  // }

}
