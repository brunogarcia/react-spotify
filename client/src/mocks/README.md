# API Mock

> ⚠️ You should update the value of `REACT_APP_API_MOCK_ENABLE` to `true` on the `client/.env` file in order to use the API Mock on develop mode.

Based on the [MSW](https://mswjs.io/) specification.

MSW is an API mocking library that uses Service Worker API to intercept actual requests.

## Usage

In **development** and **testing** mode, the app is connected with an instance of the API Mock.

## Basics

- The `data` folder stores the JSON files.

- Request `handler` is a function that determines whether an outgoing request should be mocked, and specifies its mocked response.

- Response `resolver` is a function that accepts a captured request and may return a mocked response.

## Development workflow

- The file `src/mocks/browser.ts` is in charge of creating an instance of MSW for the **development mode**.
- The setup is done in the file `src/mocks/setupBrowser.ts`.
- You can run the development mode with the following command:

```sh
npm run dev
```

## Testing workflow

- The file `src/mocks/server.ts` is in charge of creating an instance of MSW for the **testing mode**.
- The setup is done in the file `src/setupTests.ts`.
- You can run the unit tests with the following command:

```sh
npm run test
```
