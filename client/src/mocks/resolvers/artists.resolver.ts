import type { RestContext, RestRequest, ResponseComposition } from "msw";
import { HTTP_OK } from "../utils/http.codes";
import { mockUserArtists } from "../data/artists.data";

export async function getArtists(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) {
  return res(ctx.status(HTTP_OK), ctx.json(mockUserArtists()))
};
