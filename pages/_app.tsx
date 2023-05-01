import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from "next-auth/react"

export default function App({ Component, pageProps:{ session, ...pageProps } }: AppProps) {

  return (<SessionProvider  session={session}>
  <Component {...pageProps} />
  </SessionProvider>)
}
