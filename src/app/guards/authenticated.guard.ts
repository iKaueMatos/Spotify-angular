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

    console.log(token);

    return new Promise(async (res) => {
      const userCreated = await this.spotifyService.inicializeUser();
      if (userCreated) {
        res(this.notAuthenticated());
        return false;
      }

      res(true);
      return true;
    });
  }

  notAuthenticated() {
    localStorage.clear()
    this.router.navigate(['/login']);
    return false;
  }
}
