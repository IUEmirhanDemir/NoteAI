import { Component, signal } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.html',
  standalone: true,
  styleUrl: './app.css'
})
export class Sidebar {
  protected readonly title = signal('NoteAI');
}
