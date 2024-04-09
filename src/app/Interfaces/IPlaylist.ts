import { IMusica } from "./IMusic";

export interface IPlaylist {
  id: string,
  name: string,
  avatarUrl: string,
  music?: IMusica[]
}
