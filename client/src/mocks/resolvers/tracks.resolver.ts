import type { RestContext, RestRequest, ResponseComposition } from "msw";
import { HTTP_OK } from "../utils/http.codes";
import { mockUserTracks } from "../data/tracks.data";

export async function getTracks(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) {
  return res(ctx.status(HTTP_OK), ctx.json(mockUserTracks()))
};
