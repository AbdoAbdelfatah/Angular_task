import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
 
@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './profile.html',
  styles: ``
})
export class Profile implements OnInit {
  userName: string = 'Guest';

  constructor(private router: Router) {}

  ngOnInit() {
    const name = localStorage.getItem('name');
    if (name) {
      this.userName = name;
    }
  }
  logout() {
    localStorage.removeItem('name');
    this.router.navigate(['/login']);
  }
}
