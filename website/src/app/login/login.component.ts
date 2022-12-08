import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  constructor(private router: Router){ }

  createAccount(): void {
    this.router.navigate(["/create-account"]);
  }

  attemptLogin(): void {
    // insert login check code here
    this.router.navigate(["/dashboard"]);
  }
}
