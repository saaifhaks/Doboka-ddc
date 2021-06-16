import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  providers: [NgbCarouselConfig]
})
export class SlideshowComponent implements OnInit {

  title = 'ng-carousel-demo';

  images = [
    {title: 'Welcome', short: 'NORTH EAST RURAL WELFARE SOCIETY', src: 'assets/slider_2.jpg'},
    {title: 'Welcome', short: 'NORTH EAST RURAL WELFARE SOCIETY', src: 'assets/slider_1.jpg'},
    {title: 'Welcome', short: 'NORTH EAST RURAL WELFARE SOCIETY', src: 'assets/slide_4.jpg'},
    {title: 'Welcome', short: 'NORTH EAST RURAL WELFARE SOCIETY', src: 'assets/slide_6.jpg'},
    {title: 'Welcome', short: 'NORTH EAST RURAL WELFARE SOCIETY', src: 'assets/slider_3.jpg'},
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 1500;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
