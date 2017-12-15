import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListModel} from "../../models/list";
import {ListItemModel} from "../../models/listitem";
import {CorpProvider} from "../../providers/corp/corp";
import {Corporation} from "../../models/corporation";
import {NavController} from "ionic-angular";
import {CorpPage} from "../../pages/corp/corp";

@Component({
  selector: 'list-val',
  templateUrl: 'list.html'
})
export class ListComponent {
  current_model: ListItemModel;

  @Input() models: {[id: string] : ListModel} = {};
  @Input() search: string;
  @Input() current_cat: string;
  @Output() click = new EventEmitter();
  @Output() popclick = new EventEmitter();

  private corps: {[id: string] : Corporation} = {};

  private cat_stack: string[] = ["root"];
  private model_stack: ListItemModel[] = [];

  constructor(private corpProvider: CorpProvider,
              private navCtrl: NavController) {

  }

  corp_clicked(corp: Corporation) {
    this.navCtrl.push(CorpPage, {
      corp: corp
    });
  }

  list_clicked(val: ListItemModel) {
    this.model_stack.push(val);
    this.corps = val.corps;

    if (!this.models.hasOwnProperty(val.oid) || this.models[this.current_cat] == null) {
      this.models[val.oid] = new ListModel([], {});
    }

    this.cat_stack.push(val.oid);
    this.current_cat = val.oid;
    this.click.emit({'value': val});
  }

  popModel() {
    this.model_stack.pop();
    if (this.model_stack.length > 0)
      this.corps = this.model_stack[this.model_stack.length - 1].corps;
    else
      this.corps = {};

    this.cat_stack.pop();
    this.current_cat = this.cat_stack[this.cat_stack.length - 1];
    this.popclick.emit( {'value': null });
  }
}
