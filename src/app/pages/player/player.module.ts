import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRoutes } from './player.routing';

@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    PlayerRoutes,
    CommonModule
  ]
})
export class PlayerModule { }
