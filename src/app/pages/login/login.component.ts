import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.verifyTokenCallback();
  }

  openPageLogin() {
    window.location.href = this.spotifyService.getLoginUrl();
  }

  verifyTokenCallback() {
    const token = this.spotifyService.getTokenCallback();
    if (!!token) {
      this.spotifyService.setSpotifyTokenAccess(token);
    }
  }
}
