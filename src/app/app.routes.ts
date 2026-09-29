import { Routes } from '@angular/router';
import { ConferanceList } from './conferance-list/conferance-list';
import { Body } from './body/body';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
 

  { path: 'conferences', component: ConferanceList },
  { path: 'body', component: Body },
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: '**', component: NotFound },
];
