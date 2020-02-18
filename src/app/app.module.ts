import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderModule} from '../common/header/header.module';
import {FooterModule} from '../common/footer/footer.module';
import {MainComponent} from './main/main.component';
import {RecentVenturesComponent} from './recent-ventures/recent-ventures.component';
import {OurServicesComponent} from './our-services/our-services.component';
import {AccordionModule} from '../common/accordion/accordion.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RecentVenturesComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HeaderModule,
    FooterModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
