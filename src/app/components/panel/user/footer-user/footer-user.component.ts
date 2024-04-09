import { Component } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '../../../../Interfaces/IUser';
import { SpotifyService } from '../../../../services/spotify.service';
import { UserUtils } from '../../../../utils/user';

@Component({
  selector: 'app-footer-user',
  templateUrl: './footer-user.component.html',
  styleUrl: './footer-user.component.scss'
})
export class FooterUserComponent {
  closedIcon = faSignOutAlt;
  user: IUser = null;

  constructor(
    private spotifyService: SpotifyService,
    private userUtils: UserUtils
  ) { }

  ngOnInit(): void {
    this.user = this.spotifyService.user;
  }

  logout() {
    this.userUtils.logout();
  }
}
