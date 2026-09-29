import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  count=0;
  //signal
  counts=signal(0);
  incrementSimple(){
    this.count++;
  }
  //signal
  increment(){
    this.counts.update(v => v +1);
  }
}
