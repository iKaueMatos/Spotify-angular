import { Injectable } from '@angular/core';
import { spotifyConfiguration } from '../../environments/environments';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;

  constructor() {
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

      this.setSpotifyTokenAccess(token);
      await this.getSpotifyUser();
      return !!this.user;
    } catch (error) {
      console.error('Erro ao inicializar usuário:', error);
      return false;
    }
  }

  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
  }

  getLoginUrl(): string {
    const authEndpoint = `${spotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${spotifyConfiguration.clientId}&`;
    const redirectURI = `redirect_uri=${encodeURIComponent(spotifyConfiguration.redirect)}&`;
    const scopes = `scope=${spotifyConfiguration.scopes.join('%20')}&`;

    const responseType = `response_type=token&show_dialog=true`;
    return `${authEndpoint}${clientId}${redirectURI}${scopes}${responseType}`;
  }

  getTokenCallback() {
    if (!window.location.hash) {
      return '';
    }

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  setSpotifyTokenAccess(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
