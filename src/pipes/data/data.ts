import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DataPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'data',
})
export class DataPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], path: string) {
    let paths = path.split("/");
    let subitem = items;

    for (let k in paths) {
      console.log("I run 1 !");
      if (paths[k] != "")
      {
        subitem = subitem[paths[k]].subitems;
      }
    }
    console.log(subitem);

    return Object.keys(subitem);
  }
}
