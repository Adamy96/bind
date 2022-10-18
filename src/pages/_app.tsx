import type { AppProps } from 'next/app'
import AppContextProvider from '../AppContextProvider'
import { NavigationLayout } from '@templates'
import '@styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <NavigationLayout>
        <Component {...pageProps} />
      </NavigationLayout>
    </AppContextProvider>
  )
}

export default MyApp
