import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useRouter} from "next/router"
import { useEffect,useState } from 'react';

function Loading(){
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => {setLoading(false)}, 5000);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleStart)

    return() => {
      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleStart)
    }
  })
  return loading && (
    <div className='spinner-wrapper'>
      <div className='spinner'/>
    </div>
  )
}


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      // I only want to allow these two routes!
      if (as !== '/' && as !== '/other') {
        // Have SSR render bad routes as a 404.
        window.location.href = as
        return false
      }

      return true
    })
  }, [])
  
  return (<Component {...pageProps} />
    )
}


export default MyApp
