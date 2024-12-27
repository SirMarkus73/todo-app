import "./App.css"
import { TodoForm } from "./components/todoForm/todoForm"
import { Todo } from "./components/todo/todo"
import { TodoList } from "./components/todoList/todoList"
import type { ListOfTodos } from "./types"
import { useTodos } from "./hooks/useTodos"
import { useEffect, useState } from "react"

const initialTodos: ListOfTodos = [
  {
    id: 1,
    title: "pasear al perro",
    description: "tengo que ir a pasear al perro a las 18:00",
    tags: ["paseo", "mascota"],
  },
  {
    id: 2,
    title: "Programar aplicación todo",
    description:
      "tengo que continuar programando esta aplicación porque es muy importante para aprender",
  },
]

function App() {
  const { todos, add_todo, remove_todo } = useTodos({ initialTodos })
  const [loads, setLoads] = useState(0)

  useEffect(() => {
    setLoads((prev) => prev + 1)
  }, [setLoads])

  const useDelay = loads >= 1 ? false : true

  return (
    <>
      <header>
        <TodoForm addFunction={add_todo} />
      </header>
      <main>
        <TodoList>
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <Todo
                key={todo.id}
                removeFunction={remove_todo}
                startingDelay={useDelay ? index + 1 * 0.2 : undefined}
                {...todo}
              />
            ))}
        </TodoList>
      </main>
    </>
  )
}

export default App
