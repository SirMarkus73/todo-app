import type { TodoId, Todo as TodoInterface } from "../../types.d.ts"
import "./todo.css"
import { motion } from "motion/react"
interface Props extends TodoInterface {
  removeFunction: ({ id }: { id: TodoId }) => void
}

export function Todo({ id, title, description, tags, removeFunction }: Props) {
  const onClickRemoveTodo = () => {
    removeFunction({ id })
  }

  return (
    <motion.article
      className="todo"
      layout
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, delay: 0.525 },
      }}
      transition={{ duration: 0.5 }}
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
  )
}
