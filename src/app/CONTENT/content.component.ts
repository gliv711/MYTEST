import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), 
      state('*', style({ opacity: 1 })), 
      transition(':enter', animate('500ms ease-in'))
    ])
  ]
})
export class ContentComponent {
  /*SCROLLER HERE !!*/
  showScrollButton: boolean = false;


  blogPosts = [
    {
      image: 'assets/img/photos/b4.jpg',
      title: 'Ligula tristique quis risus',
      description: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '14 Apr 2021',
      category: 'Coding'
    },
    {
      image: 'assets/img/photos/b5.jpg',
      title: 'Nullam id dolor elit id nibh',
      description: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '29 Mar 2021',
      category: 'Workspace'
    },
    {
      image: 'assets/img/photos/b6.jpg',
      title: 'Ultricies fusce porta elit',
      description: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '26 Feb 2021',
      category: 'Meeting'
    }
  ];




  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 100; // Adjust scroll threshold as needed
  }



  /* EVENT BINDING HNé*/
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  




  
  }

