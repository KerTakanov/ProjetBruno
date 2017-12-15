import { Pipe, PipeTransform } from '@angular/core';
import {Corporation} from "../../models/corporation";

/**
 * Generated class for the CorpMapToIterablePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'corpMapToIterable',
})
export class CorpMapToIterablePipe implements PipeTransform {
  transform(value: {[id: string] : Corporation}) {
    return Object.keys(value).map(key => value[key]);
  }
}
