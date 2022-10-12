import { render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

/**
 * Utils copied from this repository:
 * https://github.com/TkDodo/testing-react-query/blob/main/src/tests/utils.tsx
 */

const createTestQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
    logger: {
        log: console.log,
        warn: console.warn,
        error: () => {},
    }
})

export function renderWithClient(ui: React.ReactElement) {
    const testQueryClient = createTestQueryClient()
    const { rerender, ...result } = render(
        <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
    )
    return {
        ...result,
        screen,
        waitFor,
        rerender: (rerenderUi: React.ReactElement) =>
            rerender(
                <QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>
            ),
    }
}

export function createWrapper() {
    const testQueryClient = createTestQueryClient()
    return ({ children }: {children: React.ReactNode}) => (
        <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
    )
}
