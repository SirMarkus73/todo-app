import { useEffect } from "react"
import { useTodosStore } from "../store/useTodosStore"
import type { Tag } from "../types"

export function useTodos() {
  const todos = useTodosStore((state) => state.todos)
  const uniqueTodoTags = useTodosStore((state) => state.uniqueTodoTags)
  const currentFilter = useTodosStore((state) => state.tagFilterSelected)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(uniqueTodoTags))
  }, [uniqueTodoTags])

  function filterByTag({ tag }: { tag: Tag | null }) {
    return tag ? todos.filter((todo) => todo.tags?.includes(tag)) : todos
  }

  return {
    // Filter
    setFilter: useTodosStore((state) => state.setActiveTagFilter),
    currentFilter,

    // Todos
    todos: filterByTag({ tag: currentFilter }),
    insertTodo: useTodosStore((state) => state.insertTodo),
    removeTodo: useTodosStore((state) => state.removeTodo),

    // Tags
    uniqueTodoTags,
  }
}
