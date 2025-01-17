'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { _metaDate } from '@/types/metaDate'

const client = new QueryClient()

export const ProviderQuery = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
