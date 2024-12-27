import "./App.css"
import { TodoForm } from "./components/todoForm/todoForm"
import { Todo } from "./components/todo/todo"
import { TodoList } from "./components/todoList/todoList"
import type { ListOfTodos } from "./types"
import { useTodos } from "./hooks/useTodos"

const initialTodos: ListOfTodos = [
  {
    id: 1,
    title: "pasear al perro",
    description: "tengo que ir a pasear al perro a las 18:00",
    tags: ["paseo", "mascota"],
  },
  {
    id: 2,
    title: "Programar aplicacion todo",
    description:
      "tengo que continuar programando esta aplicación porque es muy importante para aprender",
  },
]

function App() {
  const { todos, add_todo, remove_todo } = useTodos({ initialTodos })
  return (
    <>
      <header>
        <TodoForm addFunction={add_todo} />
      </header>
      <main>
        <TodoList>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Todo key={todo.id} removeFunction={remove_todo} {...todo} />
            ))
          ) : (
            <section>
              <h2>Parece que esto esta vació, prueba a añadir una tarea...</h2>
            </section>
          )}
        </TodoList>
      </main>
    </>
  )
}

export default App
