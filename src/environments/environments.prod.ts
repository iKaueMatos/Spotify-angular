export const environment = {
  production: true
}

export const spotifyConfiguration = {
  clientId: 'cc1637c04deb456b83c4d489ae38385b',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirect: 'https://nova-software-ecommerce-angular.vercel.app//login/',
  clientSecret: '',
  scopes: [
    "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuario
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", // alterar do player do usuario.
    "user-library-read", // ler biblioteca dos usuarios
    "playlist-read-private", // ler playlists privads
    "playlist-read-collaborative" // ler playlists colaborativas
  ],
}
