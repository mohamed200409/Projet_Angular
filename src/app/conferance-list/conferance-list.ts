import { Component } from '@angular/core';
import { ConferanceDetails } from '../conferance-details/conferance-details';
import { RouterLink } from '@angular/router';
import { ConferanceService } from '../services/conferance-service';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink, ConferanceDetails],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  conferances :any[]=[];

  constructor(private cs:ConferanceService) {
    this.conferances=this.cs.getAll();
  }

  inc(){alert('increment');}
}
