import { useState } from "react"
import type { TodoId, Todo as TodoInterface } from "../../types.d.ts"
import "./todo.css"
import { motion, AnimatePresence } from "motion/react"
interface Props extends TodoInterface {
  removeFunction: ({ id }: { id: TodoId }) => void
}

export function Todo({ id, title, description, tags, removeFunction }: Props) {
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
          initial={{
            clipPath: "inset(0 100% 0 0)",
          }}
          animate={{
            transition: { duration: 1, delay: 0.525 },
            clipPath: "inset(0 0 0 0)",
          }}
          exit={{
            clipPath: "inset(0 100% 0 0)",
          }}
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
