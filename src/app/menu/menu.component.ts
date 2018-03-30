import { Component } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: Item[] = [
    new Item("SMOKESTACK LIGHTING", "HAVANA CLUB, TOWNSHEND'S SPICED TEA LIQUEUR, VANILLA, HONEY, LEMON, HOT", 9),
    new Item("96 TEARS","GINGER VODKA, LIME, SUGAR, BITTERS, GINGER BEER, PINT", 8),
    new Item("FROZEN PEACH-CINNAMON MARGARITA","BLANCO TEQUILA, PEACH NECTAR, LIME, ORANGE, CINNAMON SYRUP, TRIPLE SEC, FROZEN", 9),
    new Item ("THE PINK MOOSE","SPICY TEQUILA, FRESH LIME, GRAPEFRUIT, AGAVE, PEYCHAUD'S BITTERS, ROCKS", 8)
  ];
  constructor() { }

}
