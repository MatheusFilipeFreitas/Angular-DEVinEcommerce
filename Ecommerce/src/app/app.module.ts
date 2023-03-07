import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullscreenComponent } from './layouts/fullscreen/fullscreen.component';
import { WithMenuComponent } from './layouts/with-menu/with-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FullscreenComponent,
    WithMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
