import { serialize } from 'cookie'
import querystring from 'query-string'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const CLIENT_ID = process.env.CLIENT_ID
const SERVER_REDIRECT_URI = process.env.SERVER_REDIRECT_URI

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
 function generateRandomString (length: number): string {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
};

const state = generateRandomString(16)
const scope = [
  'user-top-read',
  'user-read-email',
  'user-read-private'
].join(' ')

export default function handler (request: VercelRequest, response: VercelResponse) {
  const cookie = serialize('spotify_auth_state', state)
  const params = querystring.stringify({
    state,
    scope,
    client_id: CLIENT_ID,
    redirect_uri: SERVER_REDIRECT_URI,
    response_type: 'code'
  })

  response.setHeader('Set-Cookie', cookie);
  response.redirect(`https://accounts.spotify.com/authorize?${params}`)
}
