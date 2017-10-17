import { Pipe, PipeTransform } from '@angular/core';
import {ListItemModel} from "../../models/listitem";

/**
 * Generated class for the SearchbarFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchbarFilter',
})
export class SearchbarFilterPipe implements PipeTransform {
  transform(items: ListItemModel[], filterstr: string) {
    if (filterstr == null || filterstr == "")
      return items;

    let li: ListItemModel[] = [];
    for (let i in items) {
      let item = items[i];
      let label_lower = item.label.toLowerCase();
      let filter_str_lower = filterstr.toLowerCase();
      if (label_lower.startsWith(filter_str_lower)) {
        li.push(item);
      }
    }

    return li;
  }
}
