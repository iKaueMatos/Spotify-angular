import { Component } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { IPlaylist } from '../../../models/IPlaylist';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-panel-left',
  templateUrl: './panel-left.component.html',
  styleUrl: './panel-left.component.scss'
})
export class PanelLeftComponent {

  selectMenu: string = '';
  playlists: IPlaylist[] = [];

  homeIcone = faHome;
  searchIcone = faSearch;
  artistIcone = faGuitar;
  playlistIcone = faMusic;

  constructor(private router: Router, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.searchPlaylists();
  }

  buttonClick(value: string) {
    this.selectMenu = value;
  }

  goToPlaylist(playlistId: string) {
    this.selectMenu = playlistId;
    this.router.navigateByUrl(`player/list/playlist/${playlistId}`)
  }

  async searchPlaylists() {
    this.playlists = await this.spotifyService.searchPlaylistUser();
  }
}
