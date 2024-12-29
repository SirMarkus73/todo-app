import { motion } from "motion/react"
import type { ReactNode } from "react"
interface Props {
  children: ReactNode
}

export function TodoList({ children }: Props) {
  return (
    <motion.div
      className="columns-sm  break-inside-avoid-page gap-2 *:mb-2  mt-8 *:break-inside-avoid-column"
      layout
    >
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
