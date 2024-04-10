import { IArtist } from "../Interfaces/IArtist";
import { IMusic } from "../Interfaces/IMusic";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { IUser } from "../Interfaces/IUser";
import { newMusic } from "./factories";
import { addMilliseconds, format } from "date-fns";

export function getSpotifyUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
  return {
    id: user.id,
    name: user.display_name,
    imagemUrl: user.images.pop().url
  }
}

export function SpotifyUserToUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
  return {
    id: user.id,
    name: user.display_name,
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

export function SpotifyArtistToArtist(spotifyArtist: SpotifyApi.ArtistObjectFull): IArtist {
  return {
    id: spotifyArtist.id,
    avatarUrl: spotifyArtist.images.sort((a, b) => a.width - b.width).pop().url,
    name: spotifyArtist.name
  };
}

export function SpotifyTrackToMusica(spotifyTrack: SpotifyApi.TrackObjectFull): IMusic {

  if (!spotifyTrack)
    return newMusic();

  const msToMinutos = (ms: number) => {
    const data = addMilliseconds(new Date(0), ms);
    return format(data, 'mm:ss');
  }

  return {
    id: spotifyTrack.uri,
    title: spotifyTrack.name,
    album: {
      id: spotifyTrack.id,
      avatarUrl: spotifyTrack.album.images.shift().url,
      name: spotifyTrack.album.name
    },
    artist: spotifyTrack.artists.map(artista => ({
      id: artista.id,
      name: artista.name
    })),
    temp: msToMinutos(spotifyTrack.duration_ms),
  }
}
