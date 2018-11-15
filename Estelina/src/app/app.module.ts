import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstelinaComponent } from './estelina/estelina.component';
import { EstelinaDetailsComponent } from './estelina-details/estelina-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EstelinaComponent,
    EstelinaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
