import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  developerName: string = 'Syahmirul Afiq';
  headline: string = 'Software & AI Engineer';
  subHeadline: string = 'Computer Science graduate specializing in Artificial Intelligence, building intelligent applications and web solutions';
}
