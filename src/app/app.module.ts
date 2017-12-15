import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SearchbarFilterPipe} from "../pipes/searchbar-filter/searchbar-filter";
import {DataPipe} from "../pipes/data/data";
import {ListComponent} from "../components/list/list";
import {ListItemComponent} from "../components/list-item/list-item";
import {RestapiServiceProvider} from "../providers/restapi-service/restapi-service";
import {HttpModule} from "@angular/http";
import {SortlistPipe} from "../pipes/sortlist/sortlist";
import { CorpProvider } from '../providers/corp/corp';
import {CorpMapToIterablePipe} from "../pipes/corp-map-to-iterable/corp-map-to-iterable";
import {CorpPage} from "../pages/corp/corp";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchbarFilterPipe,
    DataPipe,
    SortlistPipe,
    ListComponent,
    CorpMapToIterablePipe,
    CorpPage,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListComponent,
    CorpPage,
    ListItemComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestapiServiceProvider,
    SortlistPipe,
    CorpMapToIterablePipe,
    CorpProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CorpProvider
  ]
})
export class AppModule {}
