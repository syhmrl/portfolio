import { Component } from '@angular/core';
import { Experience } from '../../core/models/experience';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [],
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.scss',
})
export class ExperienceTimeline {
  milestones: Experience[] = [
    {
      id: 1,
      role: 'Junior Programmer',
      organization: 'Pasa Technology',
      period: 'Present',
      description: 'Developing full-stack web applications, maintaining staging environments, and organizing internal technical office events.'
    },
    {
      id: 2,
      role: 'Assistant Trainer (CodeIgniter 4)',
      organization: 'Professional Training Event, Putrajaya',
      period: 'January 2026',
      description: 'Facilitated training sessions, guided participants through framework fundamentals, and provided hands-on troubleshooting support.'
    },
    {
      id: 3,
      role: 'BSc Computer Science (Artificial Intelligence)',
      organization: 'Universiti Teknikal Melaka Malaysia (UTeM)',
      period: 'Graduated 2025',
      description: 'Built a strong foundation in machine learning, algorithm design, and software engineering principles.'
    }
  ];
}
