import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchbarFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchbarFilter',
})
export class SearchbarFilterPipe implements PipeTransform {
  transform(items: string[], filterstr: string) {
    if (filterstr === "" || filterstr == null)
      return items;
    return items.filter((v) => {
      return v.startsWith(filterstr);
    })
  }
}
