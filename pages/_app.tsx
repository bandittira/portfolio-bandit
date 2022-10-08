import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useRouter} from "next/router"
import { useEffect,useState } from 'react';
import MyDocument from './_document';

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
  return (
    <>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
