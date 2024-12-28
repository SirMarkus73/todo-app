import { create } from "zustand"
import type { PublicTodo, Todo, TodoId } from "../types"
import { initialTodos } from "../constants/constats"

interface State {
  todos: Todo[]
  insertTodo: (todoToInsert: PublicTodo) => void
  removeTodo: (id: TodoId) => void
}

export const useTodosStore = create<State>((set) => ({
  todos: initialTodos,
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
  },
  removeTodo: ({ id }) => {
    set((prevState) => {
      const newTodos = prevState.todos.filter((todo) => todo.id != id)
      return { todos: newTodos }
    })
  },
}))
