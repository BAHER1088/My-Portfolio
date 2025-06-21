import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  scrollTo(value: number) {
    window.scrollTo({ top: value, behavior: 'smooth' });
  }

  
  downloadCV() {
    window.open('https://drive.google.com/uc?export=download&id=1OI-uufbVWgJtgzR7l9wPG-GU-EznUJWl');
  }
}
