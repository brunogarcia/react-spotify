import 'dotenv/config'
import axios, { AxiosResponse } from 'axios'
import querystring from 'query-string'
import express, { Express, Request, Response } from 'express'

import { state, stateKey, scope, responseType } from './utils/queryParams'

const app: Express = express()
const port = process.env.PORT || 8888

const CLIENT_ID = process.env.CLIENT_ID
const REDIRECT_URI = process.env.REDIRECT_URI
const CLIENT_SECRET = process.env.CLIENT_SECRET

/**
 * Redirects the user to the login path.
 */
app.get('/', (req: Request, res: Response) => {
  res.redirect('/login')
})

/**
 * Request authorization from Spotify
 */
app.get('/login', (req: Request, res: Response) => {
  const params = querystring.stringify({
    state,
    scope,
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: responseType
  })

  res.cookie(stateKey, state)
  res.redirect(`https://accounts.spotify.com/authorize?${params}`)
})

/**
 * Use auth code to request access token from Spotify
 */
app.get('/callback', async (req: Request, res: Response) => {
  const data = querystring.stringify({
    code: req.query.code || null,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code'
  })

  const buffer = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`)
  const auth = `${buffer.toString('base64')}`
  const headers = {
    Authorization: `Basic ${auth}`,
    'content-type': 'application/x-www-form-urlencoded'
  }

  try {
    const response: AxiosResponse = await axios({
      method: 'post',
      data,
      headers,
      url: 'https://accounts.spotify.com/api/token'
    })

    if (response.status === 200) {
      const {
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: expiresIn
      } = response.data

      const queryParams = querystring.stringify({
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: expiresIn
      })

      res.redirect(`http://localhost:3000/?${queryParams}`)
    } else {
      res.redirect(`/?${querystring.stringify({ error: 'invalid_token' })}`)
    }
  } catch (error) {
    res.send(error)
  }
})

/**
 * Request refresh token from Spotify
 */
app.get('/refresh_token', async (req: Request, res: Response) => {
  const { refresh_token: refreshToken } = req.query

  const buffer = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`)
  const auth = `${buffer.toString('base64')}`
  const headers = {
    Authorization: `Basic ${auth}`,
    'content-type': 'application/x-www-form-urlencoded'
  }

  try {
    const response: AxiosResponse = await axios({
      method: 'post',
      headers,
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      })
    })

    res.send(response.data)
  } catch (error) {
    res.send(error)
  }
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
