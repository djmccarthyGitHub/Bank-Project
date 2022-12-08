import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  constructor(private router: Router){ }

  attemptCreateAccount(): void {
    // insert account creation code here
    this.router.navigate(["/dashboard"]);
  }


  cancelCreateAccount(): void {
    this.router.navigate(["/login"]);
  }
}
