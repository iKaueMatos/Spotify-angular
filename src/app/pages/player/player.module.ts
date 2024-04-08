import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRoutes } from './player.routing';
import { PanelLeftComponent } from '../../components/panel/panel-left/panel-left.component';
import { PanelRightComponent } from '../../components/panel/panel-right/panel-right.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PanelLeftComponent,
    PanelRightComponent
  ],
  imports: [
    PlayerRoutes,
    CommonModule
  ]
})
export class PlayerModule { }
