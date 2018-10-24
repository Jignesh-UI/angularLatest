import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

  private isUserLoggedIn;
  private username;
  constructor(private router: Router) {
    this.isUserLoggedIn = false;
    // this.router.navigate(['home']);
  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn() {
    if (this.isUserLoggedIn) {
      return this.isUserLoggedIn;
    } else {
      this.router.navigate(['login']);
      return this.isUserLoggedIn;
    }

  }

}
