import type { RestContext, RestRequest, ResponseComposition } from "msw";
import { HTTP_OK } from "../utils/http.codes";
import { mockPlaylists, mockUserPlaylists } from "../data/playlists.data";

export async function getPlaylist(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) {
  return res(ctx.status(HTTP_OK), ctx.json(mockPlaylists()))
};

export async function getPlaylists(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) {
  return res(ctx.status(HTTP_OK), ctx.json(mockUserPlaylists()))
};
