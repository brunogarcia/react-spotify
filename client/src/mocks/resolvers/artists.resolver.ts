import type { RestContext, RestRequest, ResponseComposition } from "msw";
import { HTTP_OK } from "../utils/http.codes";
import { mockUserArtists } from "../data/artists.data";

export async function getArtists(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) {
  // TODO: test by time_range
  // const timeRange = req.url.searchParams.getAll("time_range");
  return res(ctx.status(HTTP_OK), ctx.json(mockUserArtists()))
};
