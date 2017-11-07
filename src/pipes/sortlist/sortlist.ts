import { Pipe, PipeTransform } from '@angular/core';
import {ListItemModel} from "../../models/listitem";

/**
 * Generated class for the SortlistPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sortlist',
})
export class SortlistPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: ListItemModel[]) {
    items.sort((a, b) => {
      if(a.label < b.label) return -1;
      if(a.label > b.label) return 1;
      return 0;
    });
    return items;
  }
}
