import { AppProps } from "next/dist/next-server/lib/router/router"
import { useEffect } from "react"
import analyticsClient from "../firebase/analyticsClient"
import firestoreClient from "../firebase/firestoreClient"
import "../styles/index.css"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    analyticsClient.setAnalyticsCollectionEnabled(true)
    ;(window as any).firestoreClient = firestoreClient // eslint-disable-line @typescript-eslint/no-explicit-any
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
