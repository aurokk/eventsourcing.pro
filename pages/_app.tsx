import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'

const MyApp = ({ Component, pageProps }: AppProps) =>
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>

export default MyApp
