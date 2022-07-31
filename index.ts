import 'dotenv/config'
import axios, { AxiosError, AxiosResponse } from 'axios'
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
  res.send('Hello World!')
})

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

app.get('/callback', (req: Request, res: Response) => {
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

  axios({
    method: 'post',
    data,
    headers,
    url: 'https://accounts.spotify.com/api/token'
  })
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`)
      } else {
        res.send(response)
      }
    })
    .catch((error: AxiosError) => {
      res.send(error)
    })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
