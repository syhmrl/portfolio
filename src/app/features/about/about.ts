import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  sectionTitle: string = 'About Me';

  mainBio: string = 'I am a Junior Programmer with a foundation in Computer Science and Artificial Intelligence from Universiti Teknikal Melaka Malaysia (UTeM). I specialize in bridging the gap between robust web development and intelligent, AI-driven solutions.';

  currentFocus: string = 'My current work heavily involves full-stack development and building automated RAG (Retrieval-Augmented Generation) workflows.';

  funFact: string = 'When I am not debugging Docker containers or configuring servers, you can usually find me playing Age of Empires III or hanging out with my two cats.';
}
