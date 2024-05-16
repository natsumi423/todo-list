import { ReactNode, FC } from 'react'
import Box from '@mui/material/Box'

import Header from './Header'

type Props = {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mb: 10 }}>
        {children}
      </Box>
    </>
  )
}
export default Layout
