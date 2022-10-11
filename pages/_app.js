import '../styles/globals.css'
import '../styles/search.css'
import ErrorBoundary from '../components/ErrorBoundary'

function MyApp({ Component, pageProps }) {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Component {...pageProps} />
  </ErrorBoundary>
}

export default MyApp
