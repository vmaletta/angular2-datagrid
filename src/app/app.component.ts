/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { TableComponent } from './demo';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css',
    './style.css'
  ],
  directives: [ TableComponent ],
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {

  constructor() {

  }
}
