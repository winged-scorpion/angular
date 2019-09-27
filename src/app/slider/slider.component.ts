import {Component, OnInit} from '@angular/core';

declare let require: any;
const sliderScript = require('assets/js/slider.ts');

@Component({
  moduleId: module.id,
  selector: 'app-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['app.slider.scss']
})

export class SliderComponent implements OnInit {
  slideTest = new sliderScript.Slider;

  ngOnInit() {

    this.slideTest.slider.initSlider({
        type : 'block',
        id: '#slide',
        page: true,
        slideButton: true,
        autoPlay: false,
        slideSpeed: 1000,
        slideSize : 1,
        interval: 1000
    });
  }
}


