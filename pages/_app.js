import '../styles/globals.css'
import { Inter, Kalam, Ubuntu } from '@next/font/google'
import { AppProvider, useGlobalContext } from "../context/context"
import Layout from '../components/layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight:['300','400','700']
})
const kalam = Kalam({
  subsets: ['latin'],
  variable: '--font-kalam',
  weight:['300','400','700']

})
const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight:['300','400','700']

})


export default function App({ Component, pageProps }) {
  
 
  return   (
    <AppProvider >
      <Layout>
      <main className={`${inter.variable} ${kalam.variable} ${ubuntu.variable} font-sans`}>
        <Component {...pageProps} />
        </main>
        </Layout>
    </AppProvider>
    
  )

}
