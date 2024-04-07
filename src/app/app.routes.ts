import { Routes } from '@angular/router';
import { AuthenticatedLoadGuard } from './guards/authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
      .then(module => module.LoginModule), pathMatch: 'full'
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module')
      .then(module => module.PlayerModule),
    canLoad: [AuthenticatedLoadGuard]
  }
];
