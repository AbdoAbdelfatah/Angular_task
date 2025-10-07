import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``
})
export class Login {
  firstName: string = '';
  lastName: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.firstName && this.lastName) {
      const fullName = `${this.firstName} ${this.lastName}`;
      localStorage.setItem('name', fullName);
      this.router.navigate(['/profile']);
    }
  }
}
