import type { RestContext, RestRequest, ResponseComposition } from "msw";
import { HTTP_OK } from "../utils/http.codes";
import { mockPlaylist, mockUserPlaylists } from "../data/playlists.data";

export async function getPlaylist(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) {
  const { id } = req.params;
  return res(ctx.status(HTTP_OK), ctx.json(mockPlaylist(id as string)))
};

export async function getPlaylists(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) {
  return res(ctx.status(HTTP_OK), ctx.json(mockUserPlaylists()))
};
