import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {
  //apiUrl = 'http://192.168.1.15'; //mobile url
  apiUrl = '/api/'; //browser url

  constructor(public http: Http) {
    console.log('Hello RestapiServiceProvider Provider');
  }

  getData(path) {
    console.log("Acessing " + this.apiUrl + path);

    return new Promise(resolve => {
      this.http.get(this.apiUrl + path)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
