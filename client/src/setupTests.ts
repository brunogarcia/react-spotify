import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// React Router
jest.mock("react-router-dom");

// Run the MSW for the tests
// https://mswjs.io/docs/getting-started/integrate/node

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
