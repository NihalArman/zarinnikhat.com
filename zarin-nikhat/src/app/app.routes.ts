import { Routes } from '@angular/router';
import {HomePage} from './home-page/home-page';
import {AboutPage} from './about-page/about-page';
import {ShowcasePage} from './showcase-page/showcase-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'showcase', component: ShowcasePage },
  { path: 'about', component: AboutPage },
];

