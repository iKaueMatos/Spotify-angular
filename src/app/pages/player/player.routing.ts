import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
];

export const PlayerRoutes = RouterModule.forChild(routes);
