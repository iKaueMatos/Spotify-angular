import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRoutes } from './player.routing';
import { PanelLeftComponent } from '../../components/panel/panel-left/panel-left.component';
import { PanelRightComponent } from '../../components/panel/panel-right/panel-right.component';
import { ButtonPanelComponent } from '../../components/panel/button-panel/button-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterUserComponent } from '../../components/panel/user/footer-user/footer-user.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistComponent } from '../../components/panel/top-artist/top-artist.component';
import { SearchRecentComponent  } from '../../components/panel/search-recent/search-recent.component';
import { FormsModule } from '@angular/forms';
import { PlayerCardComponent } from '../../components/panel/player-card/player-card.component';
import { ArtistTopImageComponent } from '../../components/panel/artist-top-image/artist-top-image.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PanelLeftComponent,
    PanelRightComponent,
    ButtonPanelComponent,
    FooterUserComponent,
    TopArtistComponent,
    PanelRightComponent,
    SearchRecentComponent,
    HomeComponent,
    PlayerCardComponent,
    ArtistTopImageComponent
  ],
  imports: [
    PlayerRoutes,
    FontAwesomeModule,
    FormsModule,
    CommonModule
  ]
})
export class PlayerModule { }
