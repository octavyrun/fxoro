import { CommitmentList } from './interfaces/commitment-list';
import { ItemList } from './interfaces/item-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: ItemList[] = [];
  whiteItems: ItemList[] = [];
  commitmentList: CommitmentList[] = [];

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

    this.whiteItems = [
      {
        path: 'assets/global.png',
        title: 'global trade',
        subtitle: 'dynamics',
        text: `Watching the impact
        of international
         trade renegotiations
        on markets.
      `,
      },
      {
        path: 'assets/political.png',
        title: 'political influences',
        subtitle: 'on markets',
        text: `Monitoring how
        political events
        may affect
        market trends.
      `,
      },
      {
        path: 'assets/balon.png',
        title: 'ECONOMIC',
        subtitle: 'DEVELOPMENTS IN ASIA',
        text: `Keeping an eye on
        Japan’s economic
        policies and their
        market implications.

      `,
      },

      {
        path: 'assets/shifts.png',
        title: 'shifts in luxury goods',
        subtitle: 'market',
        text: `Observing the
        potential impacts
        of new lax laws
        in Europe.
      `,
      },
    ];

    this.commitmentList = [
      {
        title: `Comprehensive`,
        subtitle: `Market Analysis:`,
        text: `Providing thorough
        continuous market news. `,
      },

      {
        title: `Up-to-Date `,
        subtitle: `Market Information:`,
        text: `Ensuring you have
        the latest data. `,
      },
      {
        title: `Strong Emphasis`,
        subtitle: `on Risk Awareness:`,
        text: `Ensuring you have
        the latest data.  `,
      },
    ];
  }
}
