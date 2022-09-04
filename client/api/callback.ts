import querystring from 'query-string'
import axios, { type AxiosResponse } from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node'

import headers from './utils/headers'
import url from './utils/url'
import {
  SERVER_REDIRECT_URI,
  FRONTEND_REDIRECT_URI,
} from './utils/env'

export default async function handler (request: VercelRequest, response: VercelResponse) {
  const params = querystring.stringify({
    code: request.query.code || null,
    redirect_uri: SERVER_REDIRECT_URI,
    grant_type: 'authorization_code'
  })

  try {
    const { status, data }: AxiosResponse = await axios({
      headers,
      data: params,
      method: 'post',
      url: url.TOKEN
    })

    if (status === 200) {
      const {
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: expiresIn
      } = data

      const queryParams = querystring.stringify({
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: expiresIn
      })

      response.redirect(`${FRONTEND_REDIRECT_URI}?${queryParams}`)
    } else {
      response.redirect(`/?${querystring.stringify({ error: 'invalid_token' })}`)
    }
  } catch (error) {
    response.send(error)
  }
}
