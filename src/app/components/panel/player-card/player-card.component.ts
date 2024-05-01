import { Component } from '@angular/core';
import { PlayerService } from '../../../services/playerservice.service';
import { IMusic } from '../../../Interfaces/IMusic';
import { Subscription } from 'rxjs';
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { newMusic } from '../../../common/factories';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent {
  music: IMusic = newMusic();
  subs: Subscription[] = []

  previousIcone = faStepBackward;
  proxIcone = faStepForward;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getCurrentMusic();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  getCurrentMusic(){
    const sub = this.playerService.currentMusic.subscribe(music => {
      this.music = music;
      console.log(music.album.avatarUrl);
    });

    this.subs.push(sub);
  }

  backMusic(){
    this.playerService.backMusic();
  }

  proxMusic(){
    this.playerService.proxMusic();
  }
}
