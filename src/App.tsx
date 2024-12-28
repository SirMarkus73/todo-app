import "./App.css"
import { TodoForm } from "./components/todoForm/todoForm"
import { Todo } from "./components/todo/todo"
import { TodoList } from "./components/todoList/todoList"
import { useTodos } from "./hooks/useTodos"
import { useEffect, useState } from "react"

function App() {
  const { todos } = useTodos()
  const [loads, setLoads] = useState(0)

  useEffect(() => {
    setLoads((prev) => prev + 1)
  }, [setLoads])

  const useDelay = loads >= 1 ? false : true

  return (
    <>
      <header>
        <TodoForm />
      </header>
      <main>
        <TodoList>
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <Todo
                key={todo.id}
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
