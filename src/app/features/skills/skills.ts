import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  webFrameworks: string[] = ['Laravel', 'Vue.js', 'Inertia.js', 'CodeIgniter 4', '.NET'];
  aiAndData: string[] = ['RAG Pipelines', 'OpenAI Models', 'Qdrant Vector DB', 'n8n', 'Python'];
  infrastructure: string[] = ['Docker', 'Laragon', 'Git', 'TypeScript'];
}
