import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styles: ``
})
export class Details implements OnInit {
  userName: string = 'Guest';

  ngOnInit() {
    const name = localStorage.getItem('name');
    if (name) {
      this.userName = name;
    }
  }
}
