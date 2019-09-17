import {Component, OnInit} from '@angular/core';
import {QuestionJson} from '../educationServices';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.scss']
})
export class EducationalComponent implements OnInit {

  const;

  inputJson: any = [];
  match: any;
  name: 'question';
  test = ['fff', 'ddd'];
  questionAnswer;
  status = false;

  constructor(private eqJson: QuestionJson) {
  }


  submit(form: NgForm) {
    let question = 0;
    this.questionAnswer = [];
    for (const i of form.value) {
      this.questionAnswer.push({question: this.inputJson[question].question, answer: form.value[i]});
      if (question >= this.inputJson.length) {
        question++;
      }
    }
    this.eqJson.sendAnswer(this.questionAnswer);
    this.status = true;
  }

  canvasGenerator() {


    const img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

    img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
    const CanvasXSize = 800;
    const CanvasYSize = 200;
    const speed = 30;
    const scale = 1.05;
    const y = -4.5;

// Main program

    const dx = 0.75;
    let imgW;
    let imgH;
    let x = 0;
    let clearX;
    let clearY;
    const canvas: any = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    img.onload = function () {
      imgW = img.width * scale;
      imgH = img.height * scale;
      if (imgW > CanvasXSize) {
        x = CanvasXSize - imgW;
      }
      if (imgW > CanvasXSize) {
        clearX = imgW;
      } else {
        clearX = CanvasXSize;
      }
      if (imgH > CanvasYSize) {
        clearY = imgH;
      } else {
        clearY = CanvasYSize;
      }



      return setInterval(draw, speed);
    };

    function draw() {

      ctx.clearRect(0, 0, clearX, clearY);

      if (imgW <= CanvasXSize) {

        if (x > (CanvasXSize)) {
          x = 0;
        }

        if (x > (CanvasXSize - imgW)) {
          ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
        }
      }   else {

        if (x > (CanvasXSize)) {
          x = CanvasXSize - imgW;
        }

        if (x > (CanvasXSize - imgW)) {
          ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
      }

      ctx.drawImage(img, x, y, imgW, imgH);

      x += dx;
    }


  }

  ngOnInit() {
    this.eqJson.get().subscribe((response) => {
        this.inputJson = response.filter(function (i) {
          if (i.active) {
            return i;
          }
        });
      },
      error => {
        console.log('error');
      });
    this.canvasGenerator();
  }

}
