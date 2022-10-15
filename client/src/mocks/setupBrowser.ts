import type { SetupWorkerApi } from "msw";
import isApiMockEnabled from "../utils/is-api-mock-enabled";

interface MockServiceWorker {
  worker: SetupWorkerApi;
}

export default function setupMockServer(): void {
  if (isApiMockEnabled) {
    const msw: MockServiceWorker = require('./browser')

    msw.worker.start({
      onUnhandledRequest: "bypass",
    })
  }
}
