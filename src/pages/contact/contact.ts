import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Corporation} from "../../models/corporation";
import {CorpProvider} from "../../providers/corp/corp";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public corps: { [id: string] : Corporation } = {};

  constructor(public navCtrl: NavController,
              public corpProvider: CorpProvider) {
    this.corpProvider.getCorp(this.corps, "5a01bc795866c804243f17f6");
  }

}
