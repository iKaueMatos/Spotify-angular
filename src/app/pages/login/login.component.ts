import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
import { Authentication } from '../../utils/authetication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    private authetication: Authentication
  ) { }

  ngOnInit(): void {
    this.verifyTokenCallback();
  }

  openPageLogin() {
    window.location.href = this.authetication.getLoginUrl();
  }

  verifyTokenCallback() {
    const token = this.authetication.getTokenCallback();
    if (!!token) {
      this.authetication.setSpotifyTokenAccess(token);
      this.router.navigate(['/player/home'])
    }
  }
}
