import { IUser } from "../models/IUser";

export function getSpotifyUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }
}
