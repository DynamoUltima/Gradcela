import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from "next-auth/react"
import { QueryClient, QueryClientProvider, useQuery, Hydrate } from '@tanstack/react-query'
import { useState } from 'react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  )
} 
