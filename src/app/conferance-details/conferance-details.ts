import { Component, computed, input, output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ConferanceService } from '../services/conferance-service';

@Component({
  selector: 'app-conferance-details',
  imports: [RouterLink],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
//  conf = input<any>()
//    increment = output();
//  inc(){
//  this.increment.emit();
//  }


///ActivatedRoute
// id:any;
// constructor(private ar:ActivatedRoute) {
// this.id=this.ar.snapshot.params['id'];
// console.log(this.id);
// }

id = input.required<string>();

constructor(private cs:ConferanceService) {}

conf = computed(() => this.cs.getAll().find(c => c.id === Number(this.id())));
}
