import type { ReactNode } from "react"
import "./todoList.css"
import { motion } from "motion/react"
interface Props {
  children: ReactNode
}

export function TodoList({ children }: Props) {
  return (
    <motion.div className="todo-list" layout>
      {children ? (
        children
      ) : (
        <motion.article
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>Parece que esto esta vació, intenta añadir una tarea...</h2>
        </motion.article>
      )}
    </motion.div>
  )
}
