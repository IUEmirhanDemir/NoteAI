import { Component } from '@angular/core';
import { Sidebar } from './sidebar';

@Component({
  selector: 'app-root',
  imports: [Sidebar],
  templateUrl: './app.html',
  standalone: true,
  styleUrls: ['./app.css']
})
export class App {
}
