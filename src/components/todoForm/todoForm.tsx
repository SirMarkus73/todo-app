import { useTodos } from "../../hooks/useTodos"
import "./todoForm.css"

export function TodoForm() {
  const { insertTodo } = useTodos()

  const onSubmit = (formdata: FormData) => {
    const title = String(formdata.get("title"))
    const description = String(formdata.get("description"))

    insertTodo({ title, description })
  }

  return (
    <form className="todo-form" action={onSubmit}>
      <legend>Crear todo (tareas por hacer)</legend>
      <label>
        Titulo:
        <input type="text" name="title" required></input>
      </label>
      <label>
        Descripción:
        <textarea name="description" required></textarea>
      </label>

      <button type="submit">Crear todo</button>
    </form>
  )
}
