import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalendarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent
  ],

  imports: [
    BrowserModule,
    routing
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
