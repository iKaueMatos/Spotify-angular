import Spotify from 'spotify-web-api-js';
import { IUser } from '../Interfaces/IUser';
import { spotifyConfiguration } from '../../environments/environments';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  user: IUser;
  spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor(private router: Router) {
    this.spotifyApi = new Spotify();
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

  getLoginUrl(): string {
    const authEndpoint = `${spotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${spotifyConfiguration.clientId}&`;
    const redirectURI = `redirect_uri=${encodeURIComponent(spotifyConfiguration.redirect)}&`;
    const scopes = `scope=${spotifyConfiguration.scopes.join('%20')}&`;

    const responseType = `response_type=token&show_dialog=true`;
    return `${authEndpoint}${clientId}${redirectURI}${scopes}${responseType}`;
  }

  notAuthenticated() {
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
