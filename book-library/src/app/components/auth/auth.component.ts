import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

 
  signUp= true;
  sign= ["SignIn", "SignUp"];
  have= ["Have an account?", "Not a user?"];
  showSign1 = "Sing In";
  showSign2 = "Sign Up";
  showHave = "Have an account?";
  userData= {
              firstName : null,
              lastName : null,
              email : "",
              password : "",
              role : "USER"
  };
  userLogin = {
              email : "",
              password : ""
  };

  constructor( private _router: Router,
                private auth: AuthService ) { }

  ngOnInit(): void {
  }

  setUserLogin(email, password) {
    this.userLogin.email = email;
    this.userLogin.password = password;
  }

  toggle() {
    if (this.signUp) {
      this.signUp = false;
      this.showHave = "Not a user?";
      this.showSign1 = "Sign Up";
      this.showSign2 = "Sign In";
    }
    else {
      this.signUp = true;
      this.showHave = "Have an account?";
      this.showSign1 = "Sign In";
      this.showSign2 = "Sign Up";
    }
  }

  submitForm() {
    if (this.userData.firstName != null) {
        this.auth.registerUser(this.userData)
        .subscribe( 
          res => {
            console.log(res)
            localStorage.setItem('bearer', res.jwt)
            this.auth.jwt = res.jwt;
            alert("You can log in now")
            this._router.navigate(['/auth'])
            },
          err => console.log(err))
    }
    else {
      this.setUserLogin(this.userData.email, this.userData.password);
      this.auth.setUser(this.userLogin);
      console.log(this.userLogin);
      this.auth.loginUser(this.userLogin)
          .subscribe(
            res => {
              console.log(res)
              localStorage.setItem('token', res.jwt)
               this._router.navigate(['/home'])
               this.auth.getUser()
                     .subscribe(
                       res => { console.log(res);
                                 this.auth.thisUser = res;
                                 localStorage.setItem("User Role", res.role);
                                 localStorage.setItem("fullName", res.fullName)},
                       err => console.log(err)
                     )
              },
            err=> console.log(err))
    }
  }
}
