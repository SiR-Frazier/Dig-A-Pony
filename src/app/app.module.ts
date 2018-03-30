import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalendarComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    routing
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
