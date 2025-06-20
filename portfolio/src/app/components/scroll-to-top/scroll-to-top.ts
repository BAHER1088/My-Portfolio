import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss'
})
export class ScrollToTop {
  isVisible = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    this.isVisible = scrollY >= viewportHeight;
    console.log(this.isVisible);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
