import {
  CLIENT_ID,
  CLIENT_SECRET,
} from './env'

const buffer = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`)
const auth = `${buffer.toString('base64')}`
const headers = {
  Authorization: `Basic ${auth}`,
  'content-type': 'application/x-www-form-urlencoded'
}

export default headers
