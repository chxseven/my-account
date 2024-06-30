import { Routes } from '@angular/router';
import { GuestLayoutComponent } from '../../modules/guest-layout/guest-layout.component';
import {
  SignInComponent,
  SignUpComponent,
} from '../../modules/guest-layout/components/indext';

export const guestRoutes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ],
  },
];
