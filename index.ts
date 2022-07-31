import 'dotenv/config'
import axios, { AxiosResponse } from 'axios'
import querystring from 'query-string'
import express, { Express, Request, Response } from 'express'
import generateRandomString from './utils/generateRandomString'

const app: Express = express()

const port = process.env.PORT || 8888

const CLIENT_ID = process.env.CLIENT_ID
const REDIRECT_URI = process.env.REDIRECT_URI
const CLIENT_SECRET = process.env.CLIENT_SECRET

// Authorization Code Flow
// https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
const stateKey = 'spotify_auth_state'
const scope = 'user-read-private user-read-email'

app.get('/', (req: Request, res: Response) => {
  res.redirect('/login')
})

// 1) Request authorization from Spotify
app.get('/login', (req: Request, res: Response) => {
  const state = generateRandomString(16)

  const params = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    state,
    scope
  })

  res.cookie(stateKey, state)
  res.redirect(`https://accounts.spotify.com/authorize?${params}`)
})

// 2) Use auth code to request access token
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
    const responseToken: AxiosResponse = await axios({
      method: 'post',
      data,
      headers,
      url: 'https://accounts.spotify.com/api/token'
    })

    if (responseToken.status === 200) {
      // 3) Use access token to request user data from Spotify API
      const { access_token: accessToken, token_type: tokenType } = responseToken.data

      try {
        const responseUser: AxiosResponse = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `${tokenType} ${accessToken}`
          }
        })
        res.send(`<pre>${JSON.stringify(responseUser.data, null, 2)}</pre>`)
      } catch (error) {
        res.send(error)
      }
    } else {
      res.send(responseToken)
    }
  } catch (error) {
    res.send(error)
  }
})

// 4) Request refresh token
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
