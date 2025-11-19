"use client"

import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import { base } from "@reown/appkit/networks"
import { createAppKit } from "@reown/appkit/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"

// const wagmiConfig = createConfig({
//   chains: [base],
//   transports: {
//     [base.id]: http(),
//   },
//   connectors: [miniAppConnector()],
// })

const networks = [base]

const projectId = "YOUR_PROJECT_ID"

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false,
})

createAppKit({
  defaultNetwork: base,
  adapters: [wagmiAdapter],
  // @ts-ignore
  networks,
  projectId,
  features: { analytics: false },
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
