import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  scrollDown() {
    window.scrollTo({
      top: 900,
      behavior: 'smooth'
    });
  }
  downloadCV() {
    window.open('https://drive.google.com/uc?export=download&id=1OI-uufbVWgJtgzR7l9wPG-GU-EznUJWl');
  }
  viewCode(url: string){
    window.open(url);
  }
}
// scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }