import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedLoadGuard implements CanLoad {

  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {

    const token = localStorage.getItem('token');
    if (!token) {
      this.notAuthenticated();
      return false;
    }

    const userCreated = await this.spotifyService.inicializeUser();
    console.log(userCreated);
    if (!userCreated) {
      this.notAuthenticated();
      return false;
    }

    return true;
  }

  notAuthenticated() {
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
