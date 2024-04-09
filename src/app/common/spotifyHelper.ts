import { IPlaylist } from "../models/IPlaylist";
import { IUser } from "../models/IUser";

export function getSpotifyUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }
}

export function SpotifyPlaylistToPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
  return {
    id: playlist.id,
    name: playlist.name,
    avatarUrl: playlist.images.pop().url
  };
}
