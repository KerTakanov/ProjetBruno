import {Component, Input} from '@angular/core';
import {ListItemModel} from "../../models/listitem";

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {
  @Input() model: ListItemModel;

  constructor() { }

}
