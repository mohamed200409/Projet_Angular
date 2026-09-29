import { Component, input, output } from '@angular/core';

export interface Conference {
  name: string;
  date: string;
  location: string;
}

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
  conf = input.required<Conference>();
  increment = output();

  inc() {
    this.increment.emit();
  }
}
