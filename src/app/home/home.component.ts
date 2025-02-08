import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isSticky: boolean = false;
  isScrolledToTop: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollThreshold = 400;
    this.isSticky = window.pageYOffset > scrollThreshold;
  }
}
