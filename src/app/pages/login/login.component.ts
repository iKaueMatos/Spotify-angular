import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private spotifyService: SpotifyService, private router: Router) { }

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
      this.router.navigate(['/player'])
    }
  }
}
