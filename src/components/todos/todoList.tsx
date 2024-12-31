import { useTodos } from "@/hooks/useTodos"
import { motion } from "motion/react"
import { Todo } from "./todo"

export function TodoList() {
  const { todos } = useTodos()

  return (
    <motion.div
      className="mt-8 columns-sm break-inside-avoid-page gap-2 *:mb-2 *:break-inside-avoid-column"
      layout
    >
      {todos.length > 0 ? (
        todos.map((todo, i) => <Todo key={todo.id} index={i} {...todo} />)
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
