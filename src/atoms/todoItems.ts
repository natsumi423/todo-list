import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import type { TodoItem } from '@/types'

const storage = createJSONStorage(() => localStorage)
// @ts-ignore
export const todoItemsState = atomWithStorage<TodoItem[]>('todoItems', [], storage)
