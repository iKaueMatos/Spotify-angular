import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { newArtist } from '../../../common/factories';
import { IArtist } from '../../../Interfaces/IArtist';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.component.html',
  styleUrl: './top-artist.component.scss'
})
export class TopArtistComponent {
  topArtists : IArtist[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.searchArtista();
  }

  async searchArtista() {
    this.topArtists = await this.spotifyService.searchTopArtists(5);
  }
}
