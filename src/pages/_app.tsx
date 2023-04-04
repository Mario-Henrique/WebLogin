import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { AuthProvider } from '@/contexts/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
