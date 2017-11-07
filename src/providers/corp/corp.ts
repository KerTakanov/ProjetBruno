import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {RestapiServiceProvider} from "../restapi-service/restapi-service";
import {Corporation} from "../../models/corporation";

/*
  Generated class for the CorpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CorpProvider {

  constructor(public restapiService: RestapiServiceProvider) {
  }

  getCorp(corplist, id) {
    let path = "corp/" + id;

    if (!(id in corplist))
    this.restapiService.getData(path)
      .then(data => {
        let _data: any = data;
        _data = JSON.parse(_data);

        corplist[id] = new Corporation(
          _data.name,
          _data.address,
          _data.phone,
          _data.website,
          _data.mail,
          _data.description,
          _data.latitude,
          _data.longitude
        );
      })
  }

}
