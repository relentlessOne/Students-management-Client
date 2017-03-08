import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import {DashboardComponent} from "./components/dashboard/dashboard.component";


export const ROUTES: Routes = [
  { path: '',      component: DashboardComponent },
  { path: '**',    component: NoContentComponent },
];
