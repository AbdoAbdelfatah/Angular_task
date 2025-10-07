import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.html',
  styles: ``
})
export class Settings {
  firstName: string = '';
  lastName: string = '';
  

  constructor() {
    const fullName = localStorage.getItem('name');
    if (fullName) {
      const [first, last] = fullName.split(' ');
      this.firstName = first || '';
      this.lastName = last || '';
    }
  }

  updateName() {
    if (this.firstName && this.lastName) {
      const fullName = `${this.firstName} ${this.lastName}`;
      localStorage.setItem('name', fullName);
    }
  }
}
