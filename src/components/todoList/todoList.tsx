import type { ReactNode } from "react"
import "./todoList.css"

interface Props {
  children: ReactNode
}

export function TodoList({ children }: Props) {
  return <div className="todo-list">{children}</div>
}
