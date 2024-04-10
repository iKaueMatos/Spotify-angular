import { IMusic } from "./IMusic";

export interface IArtist {
  id: string,
  name: string,
  avatarUrl: string,
  musics?: IMusic[]
}
