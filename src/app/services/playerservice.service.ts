import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newMusic } from '../common/factories';
import { IMusic } from '../Interfaces/IMusic';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentMusic = new BehaviorSubject<IMusic>(newMusic());
  timerId: any = null;

  constructor(private spotifyService: SpotifyService) {
    this.getCurrentMusic();
  }

  async getCurrentMusic() {
    clearTimeout(this.timerId);

    // Obtenho a musica
    const music = await this.spotifyService.getCurrentMusic();
    this.setCurrentMusic(music);

    // Causo loop
    this.timerId = setInterval(async () => {
      await this.getCurrentMusic();
    }, 5000)
  }

  setCurrentMusic(music: IMusic) {
    this.currentMusic.next(music);
  }

  async backMusic() {
    await this.spotifyService.backMusic();
  }

  async proxMusic() {
    await this.spotifyService.proxMusic();
  }
}
