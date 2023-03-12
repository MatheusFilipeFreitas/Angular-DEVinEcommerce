import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FullComponent } from './layouts/full/full.component';
import { WrapperComponent } from './layouts/wrapper/wrapper.component';
import { MenuComponent } from './components/menu/menu.component';
import { EmailPipePipe } from './common/pipes/email-pipe.pipe';
import { ListComponent } from './pages/products/list/list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, FullComponent, WrapperComponent, MenuComponent, EmailPipePipe, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EmailPipePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
