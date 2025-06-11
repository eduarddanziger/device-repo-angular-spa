// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header>{{ title }}</header>
    <router-outlet></router-outlet>
    <footer>Angular 20</footer>
  `,
  imports: [
    RouterOutlet
  ],
  styleUrl: './app.css'
})
export class App {
  protected title = 'device-repo-angular-spa';
}
