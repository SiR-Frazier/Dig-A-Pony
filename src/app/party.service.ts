import { Injectable } from '@angular/core';
import { Party } from './party.model';
import { Parties } from './mock-party';

@Injectable()
export class PartyService {

  constructor() { }

  getPartyRequests() {
    return Parties;
  }

}
