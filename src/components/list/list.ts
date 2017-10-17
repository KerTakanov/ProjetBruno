import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListModel} from "../../models/list";
import {ListItemModel} from "../../models/listitem";

@Component({
  selector: 'list-val',
  templateUrl: 'list.html'
})
export class ListComponent {
  @Input() models: ListModel[] = [];
  @Input() search: string;
  @Output() click = new EventEmitter();
  @Output() popclick = new EventEmitter();

  constructor() { }

  list_clicked(val: ListItemModel) {
    this.click.emit({'value': val})
  }

  popModel() {
    this.popclick.emit( {'value': null });
  }
}
