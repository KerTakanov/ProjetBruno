import {Component, Input} from '@angular/core';
import {Corporation} from "../../models/corporation";

/**
 * Generated class for the CorpPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'corp-page',
  templateUrl: 'corp-page.html'
})
export class CorpPageComponent {
  @Input() corp: Corporation;

  constructor() {
  }

}
