import { IMusic } from "./IMusic";

export interface IPlaylist {
  id: string,
  name: string,
  avatarUrl: string,
  music?: IMusic[]
}
