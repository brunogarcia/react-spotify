import { rest, RequestHandler } from 'msw'
import { login } from "./resolvers/login.resolver";
import { getTracks } from "./resolvers/tracks.resolver";
import { getArtists } from "./resolvers/artists.resolver";
import { getProfile } from "./resolvers/profile.resolver";
import { getPlaylist, getPlaylists } from "./resolvers/playlists.resolver";

export const handlers: RequestHandler[] = [
  rest.post('/login', login),
  rest.get('api/me', getProfile),
  rest.get('api/me/top/tracks', getTracks),
  rest.get('api/me/top/artists', getArtists),
  rest.get('api/playlists/:id', getPlaylist),
  rest.get('api/me/playlists', getPlaylists),
]
