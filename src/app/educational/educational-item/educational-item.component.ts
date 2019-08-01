import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-educational-item',
  templateUrl: './educational-item.component.html',
  styleUrls: ['./educational-item.component.scss']
})

export class EducationalItemComponent implements OnInit {

  @Input() questionItem;

  match: any = (Math.random() * 1000).toFixed(3);

  ngOnInit() {
    console.log(this.match)
  }
}
