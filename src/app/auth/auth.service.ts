import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $auth = new BehaviorSubject(this.checkLogin());

  constructor(private _router : Router) { }

  checkLogin() {
    return localStorage.getItem("isLoggedIn");
  }
  login(credentials){
    if(credentials.username=="admin" && credentials.password=="admin"){
        this.$auth.next(this.checkLogin());
        this._router.navigate(['/welcome']);
        localStorage.setItem("isLoggedIn", "true");
    } else {
      alert ("Invalid credentials!!!");
      return false;
    }
  }
  logout(){
    this.$auth.next("false");
    localStorage.removeItem("isLoggedIn");
    this._router.navigate(['/login']);
  }
}
