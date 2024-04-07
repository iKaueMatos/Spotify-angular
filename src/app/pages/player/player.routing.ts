import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  { path: '', component: PlayerComponent },
];

export const PlayerRoutes = RouterModule.forChild(routes);
