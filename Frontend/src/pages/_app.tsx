import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
