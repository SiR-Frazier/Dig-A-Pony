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
    new Event("4/9-JIMBO", "TRAP/HIPHOP"),
    new Event("4/10-BAD WIZARD","50S & 60S SOUL & ROCK"),
    new Event("4/11 - THE SPINS! VINYL LISTENING PARTY FOR ARCTIC MONKEY'S 'WHATEVER PEOPLE SAY I AM, THATS WHAT I'M NOT'","Indie Rock"),
    new Event("4/11 - MARTI","WHATEVER SHE WANTS, NO ONE DOES IT BETTER"),
    new Event("4/12 - GWIZSKI","BOOGIE & MODERN FUNK"),
    new Event("4/13 - MAXX BASS & FREAKY OUTTY","FUNK/ BOOGIE/ RAP/ R&B"),
    new Event("4/14 - MONTEL SPINOZZA","THE NOISE, THE FUNK"),
    new Event("4/15 - MIENNE & LOVELOST","TROPICAL RIDDIM/DANCEHALL/ DEEP HOUSE"),
    new Event("4/16 - THE AMAZING STUMPTOWN SPELLING BEE","7PM"),
    new Event("4/17 - NOCHES LATINAS W/ DJ BLAS","SALSA/ MERENGUE/REGGAETON"),
    new Event("4/18 - HONEST JOHN","SOUL & GARAGE"),
    new Event("4/19 - PAPI FIMBRES","AFRO FUNK & LATIN PSYCH"),
    new Event("4/20 - BATTLES & LAMAR","BOOGIE/ HIP HOP/ R&B/ ELECTRO"),
    new Event("4/21 - MAXAMILLION","SOUL/ RAP/ SWEAT"),
    new Event("4/22 - EMERSON","HIP HOP & R&B OF THE EARLY AUGHTS"),
    new Event("4/24 - AM GOLD","GREAZY OLDIES"),
    new Event("4/25 - ATOM 13","KITCHEN SINK OF SONIC EXCELLENCE"),
    new Event("4/26 - A TRAIN & EAGLE SUN KING","VINTAGE CUMBIA"),
    new Event("4/27 - JIMBO","FUNK/ RAP/ R&B"),
    new Event("4/28 - FREAKY OUTTY & MAXX BASS","FLOOR FILLERS"),
    new Event("4/29 - DO RIGHT SUNDAY","THROWBACK HIP HOP & R&B"),
    new Event("4/30 - YAWNING","SOUL & FUNK")

  ];
  // constructor() { }

}
