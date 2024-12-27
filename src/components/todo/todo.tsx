import type { TodoId, Todo as TodoInterface } from "../../types.d.ts"
import "./todo.css"

interface Props extends TodoInterface {
  removeFunction: ({ id }: { id: TodoId }) => void
}

export function Todo({ id, title, description, tags, removeFunction }: Props) {
  const onClickRemoveTodo = () => {
    removeFunction({ id })
  }

  return (
    <article className="todo">
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
    </article>
  )
}
