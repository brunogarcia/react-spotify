# Spotify App

Full stack web app to visualize personalized Spotify data with the help of Node.js, React, Styled Components, and the Spotify Web API.

Following the instructions of the course [Build a Spotify Connected App](https://www.newline.co/courses/build-a-spotify-connected-app).

## Client

- Build out a professional, responsive user interface with React, React Hooks, [React Query](https://tanstack.com/query), and the popular CSS-in-JS library, [Styled Components](https://styled-components.com/).
- Pull in data from the [Spotify API](https://developer.spotify.com/documentation/web-api/) using modern ES6 async/await methods and display that data in an engaging way.
- Use [Storybook](https://storybook.js.org/) for building UI components and pages in isolation.
- Use [Mock Service Worker](https://mswjs.io/) as API mocking library. This library uses Service Worker API to intercept actual requests.
- Use [Zod](https://www.npmjs.com/package/zod) as TypeScript-first schema validation with static type inference.
- Use [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions) to handle the authentication flow.

### Run a local instance of the client

> ⚠️ You should rename the file `client/.env.example` to `client/.env` in order to use the client on develop mode.

```bash
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Server

- Apply the basics of REST APIs, HTTP requests, and OAuth.
- Authorize an app with Spotify.
- Build a Node server with the Express framework to handle our authentication requests

### Run a local instance of the server

> ⚠️ You should rename the file `server/.env.example` to `server/.env` in order to use the server on develop mode.

```bash
npm run dev
```

Runs the server in the development mode on [http://localhost:8888](http://localhost:8888).

The server will reload if you make edits.\
You will also see any lint errors in the console.