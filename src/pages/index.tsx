import { Container } from '@mui/material'

import Form from '@/components/Form'
import List from '@/components/List'

export default function Home() {
  return (
    <Container maxWidth="md">
      <Form />
      <List />
    </Container>
  )
}
