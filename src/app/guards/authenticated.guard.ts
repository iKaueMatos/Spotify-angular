import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';
import { Authentication } from '../utils/authetication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedLoadGuard implements CanLoad {

  constructor(
    private spotifyService: SpotifyService,
    private authetication: Authentication
  ) { }

  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {

    const token = localStorage.getItem('token');
    if (!token) {
      this.authetication.notAuthenticated();
      return false;
    }

    const userCreated = await this.spotifyService.inicializeUser();
    if (!userCreated) {
      this.authetication.notAuthenticated();
      return false;
    }

    return true;
  }
}
