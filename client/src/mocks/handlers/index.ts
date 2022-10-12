import { rest, RequestHandler } from 'msw'
import { login } from "../resolvers/login.resolver";
import { getTracks } from "../resolvers/tracks.resolver";
import { getArtists } from "../resolvers/artists.resolver";
import { getProfile } from "../resolvers/profile.resolver";
import { getPlaylist, getPlaylists } from "../resolvers/playlists.resolver";

const baseURL = 'http://localhost:3000';

export const handlers: RequestHandler[] = [
  rest.post(`${baseURL}/login`, login),
  rest.get(`${baseURL}/api/me`, getProfile),
  rest.get(`${baseURL}/api/me/top/tracks`, getTracks),
  rest.get(`${baseURL}/api/me/top/artists`, getArtists),
  rest.get(`${baseURL}/api/playlists/:id`, getPlaylist),
  rest.get(`${baseURL}/api/me/playlists`, getPlaylists),
]
