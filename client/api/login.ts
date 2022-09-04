import { serialize } from 'cookie'
import querystring from 'query-string'
import type { VercelRequest, VercelResponse } from '@vercel/node'

import url from './utils/url'
import state from './utils/state'
import scope from './utils/scope'
import {
  CLIENT_ID,
  SERVER_REDIRECT_URI,
} from './utils/env'

export default function handler (request: VercelRequest, response: VercelResponse) {
  const cookie = serialize('spotify_auth_state', state)
  const params = querystring.stringify({
    state,
    scope,
    client_id: CLIENT_ID,
    redirect_uri: SERVER_REDIRECT_URI,
    response_type: 'code'
  })

  response.setHeader('Set-Cookie', cookie)
  response.redirect(`${url.AUTH}?${params}`)
}
