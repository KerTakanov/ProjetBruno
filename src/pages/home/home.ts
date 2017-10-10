import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  raw_data: any;
  search: string;
  path: string;

  constructor(public navCtrl: NavController) {
    this.path = ":/";
    this.raw_data = { ":": {
      abbr:":",
      img_path: null,
      subitems: {
        "France": {
          abbr: "fr",
          subitems: {
            "Auvergne-Rhones-Alpes": {
              abbr: "fr-auvh",
              subitems: {
                "Savoie": {
                  abbr: "fr-sve",
                  subitems: { },
                  img_path: null
                }
              },
              img_path: null
            },
            "Calvados": {
              abbr: "fr-calva",
              subitems: {},
              img_path: null
            },
            "Ile-de-France": {
              abbr: "fr-idf",
              subitems: {},
              img_path: null
            }
          },
          img_path: "../../assets/images/country_flags/fr.png"
        },
        "Italie": {
          abbr: "it",
          subitems: {
            "Lombardie": {
              abbr: "it-lbi",
              subitems: {},
              img_path: null
            },
            "Lazio": {
              abbr: "it-laz",
              subitems: {},
              img_path: null
            },
            "Piedmont": {
              abbr: "it-pied",
              subitems: {},
              img_path: null
            }
          },
          img_path: "../../assets/images/country_flags/it.png"
        }
      }}};
  }

  mvPath(path: string) {
    this.path += "/" + path;
  }
}
