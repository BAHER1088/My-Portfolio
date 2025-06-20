import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { NavBar } from './components/nav-bar/nav-bar';
import { ThemeSwitch } from './components/theme-switch/theme-switch';
import { Footer } from './components/footer/footer';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-root',
  imports: [ Home, NavBar, ThemeSwitch, Footer, ScrollToTop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';
}