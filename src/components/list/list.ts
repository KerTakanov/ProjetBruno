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
  @Input() current_cat: string;
  @Output() click = new EventEmitter();
  @Output() popclick = new EventEmitter();

  private cat_stack: string[] = ["root"];

  constructor() { }

  list_clicked(val: ListItemModel) {
    this.cat_stack.push(val.oid);
    this.current_cat = val.oid;
    this.click.emit({'value': val})
  }

  popModel() {
    this.cat_stack.pop();
    this.current_cat = this.cat_stack[this.cat_stack.length - 1];
    this.popclick.emit( {'value': null });
  }
}
