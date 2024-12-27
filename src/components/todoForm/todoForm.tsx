import "./todoForm.css"

export function TodoForm() {
  return (
    <form className="todo-form">
      <legend>Crear todo (tareas por hacer)</legend>
      <label>
        Titulo:
        <input type="text" name="description"></input>
      </label>
      <label>
        Descripción:
        <textarea name="description"></textarea>
      </label>

      <button type="submit">Crear todo</button>
    </form>
  )
}
