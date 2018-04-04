import { Injectable } from '@angular/core';
import { Party } from './party.model';
import { Parties } from './mock-party';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PartyService {
  parties: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.parties = database.list('parties');
  }

  getPartyRequests() {
    return Parties;
  }

  addParty(newParty: Party) {
    this.parties.push(newParty);
  }

}
