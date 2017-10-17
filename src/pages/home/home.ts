import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListModel} from "../../models/list";
import {ListItemModel} from "../../models/listitem";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search: string;
  path: string;

  public hmodels: ListModel[] = [];
  public listmodel: ListModel;
  public regions: ListModel;

  constructor(public navCtrl: NavController) {
    this.listmodel = new ListModel([
      new ListItemModel("France", "assets/images/country_flags/fr.png"),
      new ListItemModel("Italie", "assets/images/country_flags/it.png"),
      new ListItemModel("Angleterre", "assets/images/country_flags/gb.png"),
      new ListItemModel("Allemagne", "assets/images/country_flags/de.png"),
      new ListItemModel("Suisse", "assets/images/country_flags/ch.png")
    ]);

    this.regions = new ListModel([
      new ListItemModel("Savoie", "assets/images/country_flags/fr.png"),
      new ListItemModel("Haute-Savoie", "assets/images/country_flags/it.png"),
      new ListItemModel("Isère", "assets/images/country_flags/gb.png"),
      new ListItemModel("Calvados", "assets/images/country_flags/de.png"),
      new ListItemModel("Ile-de-France", "assets/images/country_flags/ch.png")
    ]);

    this.hmodels.push(this.listmodel);
  }

  onlistclick(event) {
    this.search = "";
    if (event.value != null && event.value.label == "France") {
      this.hmodels.push(this.regions);
    }
    else if (event.value != null) {
      this.hmodels.push(this.listmodel);
    }
  }

  popModel() {
    this.search = "";
    this.hmodels.pop();
  }
}
