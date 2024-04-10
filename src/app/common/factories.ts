import { IArtist } from "../Interfaces/IArtist";
import { IMusic } from "../Interfaces/IMusic";
import { IPlaylist } from "../Interfaces/IPlaylist";

export function newArtist(): IArtist {
  return {
    id: '',
    avatarUrl: '',
    name: '',
    musics: []
  };
}

export function newMusic(): IMusic {
  return {
    id: '',
    album: {
      id: '',
      avatarUrl: '',
      name: '',
    },
    artist: [],
    temp: '',
    title: ''
  }
}

export function newPlaylist(): IPlaylist {
  return {
    id: '',
    avatarUrl: '',
    name: '',
    music: []
  }
}
