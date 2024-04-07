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

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    const token = localStorage.getItem('token');
    if (!token) {
      return this.notAuthenticated();
    }

    return new Promise((res) => {
      const userCreated = this.spotifyService.inicializeUser();
      if (!userCreated) {
        res(this.notAuthenticated());
      }

      res(true);
    });
  }

  notAuthenticated() {
    localStorage.clear()
    this.router.navigate(['/login']);
    return false;
  }
}
