import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Login } from './components/login/login';
import { Details } from './components/profile/childs/details/details';
import { Settings } from './components/profile/childs/settings/settings';
import { authGuard } from './guards/auth-guard';
 
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'home' },
  {
    path: 'profile',
    component: Profile,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
      },
      {
        path: 'details',
        component: Details,
      },
      {
        path: 'settings',
        component: Settings,
      },
    ]
  },
  { path: 'login', component: Login, title: 'login' },
];
