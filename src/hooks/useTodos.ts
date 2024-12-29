import { useEffect } from "react"
import { useTodosStore } from "../store/useTodosStore"
import type { Tag } from "../types"

export function useTodos() {
  const todos = useTodosStore((state) => state.todos)
  const todoTags = useTodosStore((state) => state.todoTags)
  const currentFilter = useTodosStore((state) => state.tagFilter)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(todoTags))
  }, [todoTags])

  function filterByTag({ tag }: { tag: Tag | null }) {
    return tag ? todos.filter((todo) => todo.tags?.includes(tag)) : todos
  }

  return {
    todos: filterByTag({ tag: currentFilter }),
    setFilter: useTodosStore((state) => state.setFilter),
    currentFilter,
    insertTodo: useTodosStore((state) => state.insertTodo),
    removeTodo: useTodosStore((state) => state.removeTodo),
    todoTags,
  }
}
