import { Component } from '@angular/core';
import { Party } from '../party.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor() { }

  ngOnInit() {
 }

 submitForm(name: string, contact: string, description: string) {
    var newParty: Party = new Party(name, contact, description);
  }
}
