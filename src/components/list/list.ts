import {Component, Input} from '@angular/core';
import {ListModel} from "../../models/list";

@Component({
  selector: 'list-val',
  templateUrl: 'list.html'
})
export class ListComponent {
  @Input() listitems: ListModel;

  constructor() { }

}
