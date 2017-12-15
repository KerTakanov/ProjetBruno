import {ListItemModel} from "./listitem";
import {Corporation} from "./corporation";

export class ListModel {
  public constructor(public items: ListItemModel[],
                     public corps: {[id: string] : Corporation}) { }
}
