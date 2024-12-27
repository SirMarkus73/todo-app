import { PublicTodo } from "../../types"
import "./todoForm.css"

interface Props {
  addFunction: ({ description, title, tags }: PublicTodo) => void
}

export function TodoForm({ addFunction }: Props) {
  const onSubmit = (formdata: FormData) => {
    const title = String(formdata.get("title"))
    const description = String(formdata.get("description"))

    addFunction({ title, description })
  }

  return (
    <form className="todo-form" action={onSubmit}>
      <legend>Crear todo (tareas por hacer)</legend>
      <label>
        Titulo:
        <input type="text" name="title"></input>
      </label>
      <label>
        Descripción:
        <textarea name="description"></textarea>
      </label>

      <button type="submit">Crear todo</button>
    </form>
  )
}
