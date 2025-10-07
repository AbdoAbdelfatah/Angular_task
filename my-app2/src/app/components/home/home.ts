import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { HoverScaleDirective } from '../../directives/hover-scale.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HoverScaleDirective],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {}
