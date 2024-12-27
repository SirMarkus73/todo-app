import type { Todo as TodoInterface } from "../../types.d.ts"
import "./todo.css"

export function Todo({ title, description, tags }: TodoInterface) {
  return (
    <article className="todo">
      <h2>{title}</h2>
      <p>{description}</p>
      {tags && (
        <ul>
          {tags.map((tagName) => (
            <li>{tagName}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
