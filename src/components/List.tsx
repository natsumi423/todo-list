import { FC } from 'react'
import {
  Box,
  List as MuiList,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from '@mui/material'
import { useAtom } from 'jotai'
import DeleteIcon from '@mui/icons-material/Delete'

import { todoItemsState } from '@/atoms/todoItems'

const List: FC = () => {
  const [todoItems, setTodoItems] = useAtom(todoItemsState)

  const handleDelete = (id: string) => {
    setTodoItems(todoItems.filter((item) => item.id !== id))
  }
  const handleToggle = (id: string) => {
    setTodoItems(todoItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }
  return (
    <Box
      sx={{
        overflowY: 'auto',
        height: 500,
        mt: 3,
      }}
    >
      <MuiList sx={{ width: '100%', pr: 2 }}>
        {todoItems.map((item) => {
          return (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={() => handleToggle(item.id)} dense>
                <ListItemIcon>
                  <Checkbox edge="start" checked={item.checked} disableRipple />
                </ListItemIcon>
                <ListItemText id={item.id} primary={item.text} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </MuiList>
    </Box>
  )
}
export default List
