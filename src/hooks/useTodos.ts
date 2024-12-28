import { useEffect } from "react"
import { useTodosStore } from "../store/useTodosStore"

export function useTodos() {
  const todos = useTodosStore((state) => state.todos)
  const insertTodo = useTodosStore((state) => state.insertTodo)
  const removeTodo = useTodosStore((state) => state.removeTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return {
    todos,
    insertTodo,
    removeTodo,
  }
}
