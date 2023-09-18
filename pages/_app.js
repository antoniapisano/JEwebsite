import '../styles/globals.css'
import Layout from './components/layout'
import { Rye } from '@next/font/google'


const righteous = Rye({ subsets: ['latin'], weight: ['400'], display: 'swap'})

function MyApp({ Component, pageProps }) {
  return (
    <>
    <main className={righteous.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
    </>
  )
}

export default MyApp
