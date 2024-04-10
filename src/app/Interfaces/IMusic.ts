export interface IMusic {
  id: string,
  title: string,
  artist: {
    id: string,
    name: string
  }[],
  album: {
    id: string,
    name: string,
    avatarUrl: string
  },
  temp: string
}
