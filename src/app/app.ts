import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ConferanceList } from './conferance-list/conferance-list';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ConferanceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FirstProject');
}
