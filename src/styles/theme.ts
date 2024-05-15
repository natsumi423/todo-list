import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const fontFamily = [
  'Hiragino Sans',
  'ヒラギノ角ゴ Pro',
  'Hiragino Kaku Gothic Pro',
  'メイリオ',
  'Meiryo',
  'ＭＳ Ｐゴシック',
  'sans-serif',
  'Roboto',
].join(',')

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily,
    h6: {
      fontWeight: 'bold',
    },
  },
})

export default theme
