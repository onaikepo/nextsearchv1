import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/search.css'
import ErrorBoundary from '../components/ErrorBoundary'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
