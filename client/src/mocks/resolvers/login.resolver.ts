import type { RestContext, RestRequest, ResponseComposition } from "msw";
import { HTTP_OK, HTTP_UNAUTHORIZED } from "../utils/http.codes";

type Credentials = {
  user: string;
  password: string;
}

export async function login(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) {
  sessionStorage.setItem('is-authenticated', 'true');

  const { user, password } = await req.json<Credentials>();
  const isValid =
    user === "bruno@spotify.com" && password === "bruno123";

  if (isValid) {
    return res(ctx.status(HTTP_OK), ctx.json({}));
  }

  return res(
    ctx.status(HTTP_UNAUTHORIZED),
    ctx.json({ message: "Invalid credentials" })
  );
};
