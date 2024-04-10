import { Component } from '@angular/core';
import { IArtist } from '../../../Interfaces/IArtist';
import { SpotifyService } from '../../../services/spotify.service';
import { newArtist } from '../../../common/factories';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.component.html',
  styleUrl: './top-artist.component.scss'
})
export class TopArtistComponent {
  topArtists: IArtist = newArtist();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.searchArtista();
  }

  async searchArtista() {
    const artists = await this.spotifyService.searchTopArtists();
    if (!!artists)
      this.topArtists = artists.pop();
  }
}
