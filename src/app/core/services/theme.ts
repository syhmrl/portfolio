import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available globally
})
export class Theme {
  // A signal to hold our current theme state
  isDarkMode = signal<boolean>(false);

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    this.isDarkMode.update(current => !current);
    const theme = this.isDarkMode() ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('portfolio-theme', theme);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');

    // Check if they have a saved preference, otherwise check their OS preference
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }

    // Apply the initial theme
    const theme = this.isDarkMode() ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
