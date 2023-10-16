import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public isDarkMode = false;

  constructor() {}

  ngOnInit(): void {
    this.checkIsDarkMode();
  }

  checkIsDarkMode() {
    if (
      (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localStorage.getItem('theme') === 'dark'
    ) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      this.isDarkMode = true;
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      this.isDarkMode = false;
    }
  }
  toggleDarkMode() {
    console.log('clicked');
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      this.isDarkMode = false;
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      this.isDarkMode = true;
    }
  }
}
