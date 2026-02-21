import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  emailAddress: string = 'syahmirul.afiq.dev@gmail.com';

  sendMessage(event: Event) {
    event.preventDefault(); // prevent page from refreshing
    alert('Form submission logic will go here!');
  }
}
