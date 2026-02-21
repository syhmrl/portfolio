import { Component } from '@angular/core';
import { Project } from '../../core/models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  portfolioProjects: Project[] = [
    {
      id: 1,
      title: 'AI RAG Chatbot Pipeline',
      description: 'An automated Retrieval-Augmented Generation workflow designed to securely process documents and query data using OpenAI models and a vector database.',
      techStack: ['n8n', 'Qdrant', 'OpenAI', 'Python'],
      imageUrl: 'assets/project-rag.jpg',
    },
    {
      id: 2,
      title: 'Full-Stack Management System',
      description: 'A responsive, single-page web application featuring complex state management, user authentication, and dynamic data tables.',
      techStack: ['Laravel', 'Vue.js', 'Inertia.js', 'TypeScript'],
      imageUrl: 'assets/project-web.jpg',
      githubUrl: 'https://github.com/yourusername/management-system'
    }
  ]
}
