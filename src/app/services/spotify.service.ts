import { Injectable } from '@angular/core';
import { spotifyConfiguration } from '../../environments/environments';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../Interfaces/IUser';
import { IPlaylist } from '../Interfaces/IPlaylist';
import { SpotifyPlaylistToPlaylist, SpotifyUserToUser } from '../common/spotifyHelper';
import { Authentication } from '../utils/authetication';

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
}
