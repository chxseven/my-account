import { Routes } from '@angular/router';
import { homeRoutes } from './home-routes/home.routes';
import { guestRoutes } from './guest-routes/guest.routes';

export const appRoutes: Routes = [
  { path: 'home', loadChildren: () => homeRoutes },
  { path: 'guest', loadChildren: () => guestRoutes },
  { path: '**', redirectTo: 'home' },
];
