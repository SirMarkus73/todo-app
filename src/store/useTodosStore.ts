import { create } from "zustand"
import { initialTodos } from "../constants/constats"
import type { PublicTodo, Tag, Todo, TodoId } from "../types"

interface State {
  todos: Todo[]
  tagFilter: string | null
  todoTags: Todo["tags"]
  setFilter: ({ tag }: { tag: Tag | null }) => void
  setTodos: (Todos: Todo[]) => void
  insertTodo: (todoToInsert: PublicTodo) => void
  removeTodo: (id: TodoId) => void
  getTodosTags: () => Todo["tags"]
}

const localStorageData = localStorage.getItem("todos")

const initTodos: Todo[] = localStorageData
  ? JSON.parse(localStorageData)
  : initialTodos

const initialTodoTags = initTodos
  .flatMap((todo) => todo.tags)
  .filter((tag) => tag !== undefined)

export const useTodosStore = create<State>((set, get) => ({
  todos: initTodos,
  tagFilter: null,
  todoTags: initialTodoTags,
  setFilter: ({ tag }) => {
    set({ tagFilter: tag })
  },
  setTodos: (todos) => {
    set({ todos })
    set({ todoTags: get().getTodosTags() })
  },
  insertTodo: (todoToInsert) => {
    set((prevState) => {
      let newId = 0
      prevState.todos.map((todo) => {
        if (todo.id >= newId) newId = todo.id + 1
      })

      const newTodo: Todo = { id: newId, ...todoToInsert }
      const newTodos = [...prevState.todos, newTodo]
      return { todos: newTodos }
    })
    set({ todoTags: get().getTodosTags() })
  },
  removeTodo: ({ id }) => {
    set((prevState) => {
      const newTodos = prevState.todos.filter((todo) => todo.id !== id)
      return { todos: newTodos }
    })
    set({ todoTags: get().getTodosTags() })
  },
  getTodosTags: () => {
    const todos = get().todos
    const tags = todos
      .flatMap((todo) => todo.tags)
      .filter((tag) => tag !== undefined)

    return [...new Set(tags)]
  },
}))
