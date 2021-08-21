import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { CommonHttpServiceService } from './services/common-http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { StateDetailsComponent } from './Components/state-details/state-details.component';
import { ContactInfoComponent } from './Components/contact-info/contact-info.component';
import { UtilService } from './services/util.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './Components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StateDetailsComponent,
    ContactInfoComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CommonHttpServiceService, UtilService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
