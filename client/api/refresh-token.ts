import querystring from 'query-string'
import axios, { type AxiosResponse } from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node'

import url from './utils/url'
import headers from './utils/headers'

export default async function handler (request: VercelRequest, response: VercelResponse) {
  const { refresh_token } = request.query

  try {
    const { data }: AxiosResponse = await axios({
      headers,
      method: 'post',
      url: url.TOKEN,
      data: querystring.stringify({
        refresh_token,
        grant_type: 'refresh_token',
      })
    })

    response.send(data)
  } catch (error) {
    response.send(error)
  }
}
