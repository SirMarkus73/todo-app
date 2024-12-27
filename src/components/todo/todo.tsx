import { useState } from "react"
import type { TodoId, Todo as TodoInterface } from "../../types.d.ts"
import "./todo.css"
import { motion, AnimatePresence } from "motion/react"

interface Props extends TodoInterface {
  removeFunction: ({ id }: { id: TodoId }) => void
  startingDelay?: number
}

const articleVariants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  show: (startingDelay: number) => ({
    transition: { duration: 1, delay: startingDelay },
    clipPath: "inset(0 0 0 0)",
  }),
}

const defaultDelay = 0.666

export function Todo({
  id,
  title,
  description,
  tags,
  removeFunction,
  startingDelay = defaultDelay,
}: Props) {
  const [isActive, setActive] = useState(true)

  const onClickRemoveTodo = () => {
    setActive(!isActive)
  }

  const onExitComplete = () => {
    removeFunction({ id })
  }

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isActive && (
        <motion.article
          className="todo"
          layout
          transition={{ duration: 0.65, type: "spring", bounce: 0.333 }}
          variants={articleVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          custom={startingDelay}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          {tags && (
            <ul>
              {tags.map((tagName, index) => (
                <li key={`${tagName}-${index}`}>{tagName}</li>
              ))}
            </ul>
          )}
          <button
            type="button"
            className="remove-button"
            onClick={onClickRemoveTodo}
          >
            Eliminar
          </button>
        </motion.article>
      )}
    </AnimatePresence>
  )
}
