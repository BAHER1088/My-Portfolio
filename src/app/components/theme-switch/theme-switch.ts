import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.html',
  styleUrl: './theme-switch.scss'
})
export class ThemeSwitch implements OnInit {
  isLightMode = false;

  ngOnInit() {
    // Set initial state
    this.isLightMode = document.body.getAttribute('data-theme') === 'light';
  }

  toggleTheme() {
    if (this.isLightMode) {
      document.body.removeAttribute('data-theme'); // dark mode
      this.isLightMode = false;
    } else {
      document.body.setAttribute('data-theme', 'light');
      this.isLightMode = true;
    }
  }
}
