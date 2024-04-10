import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMusic } from '../../Interfaces/IMusic';
import { SpotifyService } from '../../services/spotify.service';
import { Subscription } from 'rxjs';
import { newMusic } from '../../common/factories';
import { PlayerService } from '../../services/playerservice.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  musics: IMusic[] = []
  currentMusic: IMusic = newMusic();

  subs: Subscription[] = [];

  // IconePlay
  playIcone = faPlay;

  constructor(
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getMusic();
    this.getCurrentMusic();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  async getMusic() {
    this.musics = await this.spotifyService.searchMusics()
  }

  getCurrentMusic() {
    const sub = this.playerService.currentMusic.subscribe(music => {
      this.currentMusic = music;
    });

    this.subs.push(sub);
  }

  getArtist(music: IMusic) {
    return music.artist.map(artist => artist.name).join(', ');
  }

  async executeMusic(music: IMusic) {
    await this.spotifyService.executeMusic(music.id);
    this.playerService.setCurrentMusic(music);
  }
}
