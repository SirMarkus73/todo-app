import { useTodosStore } from "../store/useTodosStore"

export function useTodos() {
  const todos = useTodosStore((state) => state.todos)
  const insertTodo = useTodosStore((state) => state.insertTodo)
  const removeTodo = useTodosStore((state) => state.removeTodo)

  return {
    todos,
    insertTodo,
    removeTodo,
  }
}
