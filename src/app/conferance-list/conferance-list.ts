import { Component } from '@angular/core';
import { ConferanceDetails, Conference } from '../conferance-details/conferance-details';

@Component({
  selector: 'app-conferance-list',
  imports: [ConferanceDetails],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  conferences: Conference[] = [

    {
      name: 'Conference 1',
      date: '2023-01-15',
      location: 'New York'
    },

    {
      name: 'Conference 2',
      date: '2023-02-20',
      location: 'Los Angeles'
    },

    {
      name: 'Conference 3',
      date: '2023-03-10',
      location: 'Chicago'
    }

  ];
  inc(){alert('increment');}
}
