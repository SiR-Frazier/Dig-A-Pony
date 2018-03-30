import { Component } from '@angular/core';
import { Event } from '../event.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  events: Event[] = [
    new Event("4/1-Happy Hour w/ Maxx Bass", "FUNK/ BOOGIE/ RAP/ R&B"),
    new Event("4/2- ANJALI & THE INCREDIBLE KID", "VINTAGE INTERNATIONAL"),
    new Event("4/3-GWIZSKI", "BOOGIE & MODERN FUNK"),
    new Event("4/4-TIMOTHY B", "GOLDEN ERA HIPHOP"),
    new Event("4/5-SWEATY TECHNIQUE", "SOUL & FUNK"),
    new Event("4/6-SQUINTSY JONES", "MID CENTURY JAZZ"),
    new Event("4/7-MAXAMILLION", "SOUL/ RAP/ SWEAT"),
    new Event("4/8-LAMAR", "BOOGIE/HIPHOP/R&B/ELECTRO"),
    new Event("4/9-JIMBO", "TRAP/HIPHOP")
  ];
  constructor() { }

}
