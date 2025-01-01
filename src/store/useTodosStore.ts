import { create } from "zustand"
import { initialTodos } from "@/constants/constats"
import type { PublicTodo, Tag, Todo, TodoId } from "@/types"

interface State {
  todos: Todo[]
  tagFilterSelected: string | null
  uniqueTodoTags: Todo["tags"]
}

interface Actions {
  setActiveTagFilter: ({ tag }: { tag: Tag | null }) => void
  setTodos: (Todos: Todo[]) => void
  insertTodo: (todoToInsert: PublicTodo) => void
  removeTodo: (id: TodoId) => void
  getUniqueTodoTags: () => Todo["tags"]
}

const localStorageData = localStorage.getItem("todos")

const initTodos: Todo[] = localStorageData
  ? JSON.parse(localStorageData)
  : initialTodos

const initTags = [
  ...new Set(
    initTodos.flatMap((todo) => todo.tags).filter((tag) => tag !== undefined),
  ),
]

export const useTodosStore = create<State & Actions>((set, get) => ({
  todos: initTodos,
  tagFilterSelected: null,
  uniqueTodoTags: initTags,
  setActiveTagFilter: ({ tag }) => {
    set({ tagFilterSelected: tag })
  },

  setTodos: (todos: Todo[]): void => {
    set({
      todos,
      uniqueTodoTags: get().getUniqueTodoTags(),
    })
  },

  insertTodo: (todoToInsert: PublicTodo): void => {
    set((prevState) => {
      let newId = 0
      prevState.todos.map((todo) => {
        if (todo.id >= newId) newId = todo.id + 1
      })

      const newTodo: Todo = { id: newId, ...todoToInsert }
      const newTodos = [...prevState.todos, newTodo]

      return {
        todos: newTodos,
        uniqueTodoTags: get().getUniqueTodoTags(),
      }
    })
  },

  removeTodo: ({ id }: TodoId): void => {
    set((prevState) => {
      const newTodos = prevState.todos.filter((todo) => todo.id !== id)
      return {
        todos: newTodos,
        uniqueTodoTags: get().getUniqueTodoTags(),
      }
    })
  },

  getUniqueTodoTags: (): Tag[] => {
    const todos = get().todos
    const tags = todos
      .flatMap((todo) => todo.tags)
      .filter((tag) => tag !== undefined)

    return [...new Set(tags)]
  },
}))
