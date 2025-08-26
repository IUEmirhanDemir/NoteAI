import { Component, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Subject {
  id: string;
  name: string;
  expanded: boolean;
  items: string[];
}

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.html',
  standalone: true,
  styleUrl: './sidebar.css',
  imports: [CommonModule, FormsModule]
})
export class Sidebar {
  appTitle = input<string>('NoteAI');

  protected readonly isCollapsed = signal(false);
  protected searchTerm = '';

  protected readonly subjects = signal<Subject[]>([
    {
      id: 'math',
      name: 'Mathematik',
      expanded: false,
      items: ['Analysis', 'Algebra', 'Geometrie', 'Statistik']
    },
    {
      id: 'physics',
      name: 'Physik',
      expanded: false,
      items: ['Mechanik', 'Thermodynamik', 'Elektromagnetismus', 'Quantenphysik']
    },
    {
      id: 'chemistry',
      name: 'Chemie',
      expanded: false,
      items: ['Organische Chemie', 'Anorganische Chemie', 'Physikalische Chemie']
    }
  ]);

  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }

  toggleSubject(subject: Subject) {
    const currentSubjects = this.subjects();
    const updatedSubjects = currentSubjects.map(s =>
      s.id === subject.id ? { ...s, expanded: !s.expanded } : s
    );
    this.subjects.set(updatedSubjects);
  }

  addNewModule() {
    console.log('Neues Modul hinzufügen');
  }
}
