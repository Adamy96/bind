import type { AppProps } from 'next/app'
import AppContextProvider from '../AppContextProvider'
import { NavigationLayout } from '@templates'
import { useRouter } from 'next/router'
import '@styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AppContextProvider>
      <NavigationLayout router={router}>
        <Component {...pageProps} />
      </NavigationLayout>
    </AppContextProvider>
  )
}

export default MyApp
