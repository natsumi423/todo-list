import { FC, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useAtom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'

import { todoItemsState } from '@/atoms/todoItems'

const Form: FC = () => {
  const [text, setText] = useState('')
  const [todoItems, setTodoItems] = useAtom(todoItemsState)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodoItems([...todoItems, { id: uuidv4(), text: text, checked: false }])
    setText('')
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value)
  }
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: 10,
      }}
    >
      <TextField fullWidth label="ToDo" placeholder="Todoを入力してください" value={text} onChange={handleChange} />
      <Button variant="contained" type="submit" sx={{ ml: 1, p: 2 }}>
        追加
      </Button>
    </Box>
  )
}
export default Form
