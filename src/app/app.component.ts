import { ItemList } from './interfaces/item-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: ItemList[] = [];

  ngOnInit(): void {
    this.items = [
      {
        path: 'assets/energy-focus-icon.png',
        title: 'renwable',
        subtitle: 'energy focus',
        text: `Noting a trend towards renewable energy in response to fluctuating oil
prices.`,
      },

      {
        path: 'assets/healthcare_sector.png',
        title: 'healtcare sector',
        subtitle: 'development',
        text: `Observing changes in healthcare investment due to new medical treatments.
        `,
      },

      {
        path: 'assets/evolving-bond.png',
        title: 'Evolving bond',
        subtitle: 'Market Landscape',
        text: `Highlighting
        potential shifts in government bond strategies.
        `,
      },

      {
        path: 'assets/increased-interest.png',
        title: 'Increased interest',
        subtitle: 'in civersecurity',
        text: `Recognizing the
        growing importance
        of digital security investments
        `,
      },
    ];
  }
}
