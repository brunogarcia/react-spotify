import type { RestContext, RestRequest, ResponseComposition } from "msw";
import { HTTP_OK } from "../utils/http.codes";
import { mockProfile } from "../data/profile.data";

export async function getProfile(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) {
  return res(ctx.status(HTTP_OK), ctx.json(mockProfile()))
};
