import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {
  }

  carouselElem;
  parallaxElem;

  ngOnInit() {

    // Carousel
    this.carouselElem = document.querySelector('.carousel');
    M.Carousel.init(this.carouselElem, {
      fullWidth: true,
      indicators: true,
      duration: 500
    });

    // this.autoPlayCarousel();

    // Parallax
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, null);
  }

  // Parallax
  autoPlayCarousel() {
    setInterval(() => {
      const instance = M.Carousel.getInstance(this.carouselElem);
      instance.next();
    }, 3500);
  }
}
