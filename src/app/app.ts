// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>
    <footer>
      © {{ currentYear }} - {{ title }}
    </footer>
  `,
  imports: [
    RouterOutlet
  ],
  styleUrl: './app.css'
})
export class App {
  protected title = 'Audio Device Repository Client';
  protected currentYear = new Date().getFullYear();
}
