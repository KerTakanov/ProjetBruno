import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListModel} from "../../models/list";
import {ListItemModel} from "../../models/listitem";
import {RestapiServiceProvider} from "../../providers/restapi-service/restapi-service";
import {SortlistPipe} from "../../pipes/sortlist/sortlist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search: string;
  path: string;

  public listmodel: { [id: string] : ListModel } = {"root": new ListModel([])};
  public categories: { [id: string] : ListItemModel} = {};
  public translations: { [id: string] : string} = {};
  public current_cat: string = "root";

  constructor(public navCtrl: NavController, public restapiService: RestapiServiceProvider, public sortlist: SortlistPipe) {
    this.getCategory("root");
    this.getCategoryList("root");
  }

  getTranslation(id, cat_id) {
    console.log("GetTranslation(" + id + ")");
    let path = "translation/" + id;

    this.restapiService.getData(path)
      .then(data => {
        let _data: any = data;
        _data = JSON.parse(_data);

        this.translations[id] = _data.names["fr-FR"];
        this.categories[cat_id].label = this.translations[id];

        // Optimiser le tri pour qu'il ne soit appellé que lors que nécessaire (= lorsque la liste "root" est modifiée)
        this.listmodel["root"].items = this.sortlist.transform(this.listmodel["root"].items)
      });
  }

  getCategoryList(id) {
    console.log("GetCategoryList(" + id + ")");
    if (id in this.categories) {
      for (let subid of this.categories[id].sublist) {
        this.getCategory(subid, id);
      }
    }
  }

  getCategory(id, listmodel=null) {
    let path = "category/" + id;

    this.restapiService.getData(path)
      .then(data => {
        let _data: any = data;
        _data = JSON.parse(_data);

        let subcat = [];
        if (_data.subcat != null)
        for (let item of _data.subcat) {
          subcat.push(item['$oid']);
        }

        let corps = [];
        if (_data.corps != null) {
          for (let item of _data.corps) {
            corps.push(item['$oid']);
          }
        }

        let name = null;
        if (_data.name)
          name = _data.name["$oid"];

        this.categories[id] = new ListItemModel(id, name, _data.image, subcat, corps);
        if (this.listmodel[listmodel] == null)
          this.listmodel[listmodel] = new ListModel([]);
        this.listmodel[listmodel].items.push(this.categories[id]);

        if (name != null)
          this.getTranslation(name, id);
        this.getCategoryList(id);
      });
  }
}
