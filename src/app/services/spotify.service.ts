import { Injectable } from '@angular/core';
import { spotifyConfiguration } from '../../environments/environments';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../Interfaces/IUser';
import { IPlaylist } from '../Interfaces/IPlaylist';
import { SpotifyArtistToArtist, SpotifyPlaylistToPlaylist, SpotifyTrackToMusica, SpotifyUserToUser } from '../common/spotifyHelper';
import { Authentication } from '../utils/authetication';
import { IArtist } from '../Interfaces/IArtist';
import { IMusic } from '../Interfaces/IMusic';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  user: IUser;
  spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor(private authetication: Authentication) {
    this.spotifyApi = new Spotify();
  }

  async inicializeUser(): Promise<boolean> {
    try {
      if (!!this.user) {
        return true;
      }

      const token = localStorage.getItem('token');
      if (!token) {
        return false;
      }

      this.authetication.setSpotifyTokenAccess(token);
      await this.getSpotifyUser();
      return !!this.user;
    } catch (error) {
      return false;
    }
  }

  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
    return this.user = SpotifyUserToUser(userInfo);
  }

  async searchPlaylistUser(offset = 0, limit = 50): Promise<IPlaylist[]> {
    if (!this.user) {
      throw new Error('User is not initialized');
    }

    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, { offset, limit });

    return playlists.items.map(SpotifyPlaylistToPlaylist)
  }

  async searchTopArtists(limit = 10): Promise<any> {
    const artists = await this.spotifyApi.getMyTopArtists({ limit });
    return artists.items.map(SpotifyArtistToArtist);
  }

  async executeMusic(musicaId: string) {
    await this.spotifyApi.queue(musicaId);
    await this.spotifyApi.skipToNext();
  }

  async getCurrentMusic(): Promise<IMusic> {
    const musicSpotify = await this.spotifyApi.getMyCurrentPlayingTrack();
    return SpotifyTrackToMusica(musicSpotify.item);
  }

  async backMusic() {
    await this.spotifyApi.skipToPrevious();
  }

  async proxMusic() {
    await this.spotifyApi.skipToNext();
  }

  async searchMusics(offset = 0, limit = 50): Promise<IMusic[]> {
    const musics = await this.spotifyApi.getMySavedTracks({ offset, limit });
    return musics.items.map(music => SpotifyTrackToMusica(music.track));
  }
}
