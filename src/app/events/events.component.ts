import { Component, OnInit } from '@angular/core';
import { Party } from '../party.model';
import { Router } from '@angular/router';
import { PartyService } from '../party.service'; //added for service


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [PartyService]
})
export class EventsComponent implements OnInit {
  parties: Party[];

  constructor(private router: Router, private partyService: PartyService) {}

  ngOnInit() {
    this.parties = this.partyService.getPartyRequests();
 }

 submitForm(name: string, contact: string, description: string) {
    var newParty: Party = new Party(name, contact, description);
  }
}
