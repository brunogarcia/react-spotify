import querystring from 'query-string'
import axios, { type AxiosResponse } from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node'

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const SERVER_REDIRECT_URI = process.env.SERVER_REDIRECT_URI
const FRONTEND_REDIRECT_URI = process.env.FRONTEND_REDIRECT_URI

export default async function handler (request: VercelRequest, response: VercelResponse) {
  const params = querystring.stringify({
    code: request.query.code || null,
    redirect_uri: SERVER_REDIRECT_URI,
    grant_type: 'authorization_code'
  })

  const buffer = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`)
  const auth = `${buffer.toString('base64')}`
  const headers = {
    Authorization: `Basic ${auth}`,
    'content-type': 'application/x-www-form-urlencoded'
  }

  try {
    const { status, data }: AxiosResponse = await axios({
      method: 'post',
      data: params,
      headers,
      url: 'https://accounts.spotify.com/api/token'
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
