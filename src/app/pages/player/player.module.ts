import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRoutes } from './player.routing';
import { PanelLeftComponent } from '../../components/panel/panel-left/panel-left.component';
import { PanelRightComponent } from '../../components/panel/panel-right/panel-right.component';
import { ButtonPanelComponent } from '../../components/panel/button-panel/button-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlayerComponent,
    PanelLeftComponent,
    PanelRightComponent,
    ButtonPanelComponent
  ],
  imports: [
    PlayerRoutes,
    FontAwesomeModule,
    CommonModule
  ]
})
export class PlayerModule { }
