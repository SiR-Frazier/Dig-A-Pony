import { Component } from '@angular/core';
import { Party } from '../party.model';
import { Router } from '@angular/router';
import { PartyService } from '../party.service'; //added for service
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [PartyService]
})
export class EventsComponent {
  parties: FirebaseListObservable<any[]>;

  constructor(private router: Router, private partyService: PartyService) {}

 //  ngOnInit() {
 //    this.parties = this.partyService.getPartyRequests();
 // }

 submitForm(name: string, contact: string, description: string) {
    var newParty: Party = new Party(name, contact, description);
    this.partyService.addParty(newParty);
  }
}


// import { Component, OnInit } from '@angular/core';
//
// export class EventsComponent implements OnInit {
//   parties: FirebaseListObservable<any[]>;
