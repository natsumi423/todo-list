import { FC } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material/'

const Header: FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography variant="h6" noWrap component="div">
          ToDoリスト
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Header
