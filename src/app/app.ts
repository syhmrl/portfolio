import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { ExperienceTimeline } from './features/experience-timeline/experience-timeline';
import { Contact } from './features/contact/contact';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Skills, Projects, ExperienceTimeline, Contact, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Portfolio';
}
