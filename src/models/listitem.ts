import {Corporation} from "./corporation";

export class ListItemModel {
  public constructor(public oid: string,
                     public label: string,
                     public imgpath: string,
                     public sublist: string[],
                     public corps: string[]) {

  }
}
