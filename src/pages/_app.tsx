import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'jotai'

import '@/styles/globals.css'
import Layout from '@/components/Layout'
import type { AppPropsWithLayout } from 'next/app'
import theme from '@/styles/theme'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />

          <title>ToDoリスト</title>
          <meta name="description" content="ToDoリスト" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
