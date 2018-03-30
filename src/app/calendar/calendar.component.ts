import { Component } from '@angular/core';
import { Event } from '../event.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  events: Event[] = [
    new Event("4/1-Happy Hour w/ Maxx Bass", "FUNK/ BOOGIE/ RAP/ R&B")

  ];
  constructor() { }

}
