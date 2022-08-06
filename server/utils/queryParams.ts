import generateRandomString from './generateRandomString'

/**
 * Authorization Code Flow
 * @link https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
 */

export const responseType = 'code'

export const scope = [
  'user-top-read',
  'user-read-email',
  'user-read-private'
].join(' ')

export const stateKey = 'spotify_auth_state'
export const state = generateRandomString(16)
