import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Corporation} from "../../models/corporation";

/**
 * Generated class for the CorpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


declare var google;

@IonicPage()
@Component({
  selector: 'page-corp',
  templateUrl: 'corp.html',
})
export class CorpPage {
  public corp: Corporation;
  @ViewChild('map') mapElement;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.corp = navParams.get("corp");

  }

  initMap(){



    let latLng = new google.maps.LatLng(this.corp.latitude, this.corp.longitude);

    let mapOption = {
      center : latLng,
      zoom : 15,
      mapTypeControl : false,
      streetViewControl : false,
      fullscreenControl : false,
      ruotateControl : false

    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        //this.infoWindow.setPosition(pos);
        //this.infoWindow.setContent('Location found.');
        //this.map.setCenter(pos);
      }, function() {
        //this.handleLocationError(true, this.infoWindow, this.map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      //this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }

    var marker = new google.maps.Marker({ position: {lat: this.corp.latitude, lng : this.corp.longitude},
      map : this.map})

  }

  ionViewDidLoad(){
    this.initMap();
  }
}
