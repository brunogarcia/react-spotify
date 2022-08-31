import querystring from 'query-string'
import axios, { type AxiosResponse } from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node'

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

export default async function handler (request: VercelRequest, response: VercelResponse) {
  const { refresh_token } = request.query
  const buffer = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`)
  const auth = `${buffer.toString('base64')}`
  const headers = {
    Authorization: `Basic ${auth}`,
    'content-type': 'application/x-www-form-urlencoded'
  }

  try {
    const { data }: AxiosResponse = await axios({
      method: 'post',
      headers,
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token
      })
    })

    response.send(data)
  } catch (error) {
    response.send(error)
  }
}
