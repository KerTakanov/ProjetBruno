import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Corporation} from "../../models/corporation";
import {CorpProvider} from "../../providers/corp/corp";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController,
              public corpProvider: CorpProvider) {
  }

}
