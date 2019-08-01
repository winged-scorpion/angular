import {Component, Input} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.scss']
})


export class ItemComponent {
  @Input() infoText;
}
