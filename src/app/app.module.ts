import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    routing
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
