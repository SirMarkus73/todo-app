import { TodoForm } from "./components/todos/todoForm"
import { Todo } from "./components/todos/todo"
import { TodoList } from "./components/todos/todoList"
import { useTodos } from "./hooks/useTodos"
import { useEffect, useState } from "react"
import { Modal } from "./components/ui/modal"
import { Plus } from "./icons/plus"
import { IconButton } from "./components/ui/iconButton"

function App() {
  const { todos } = useTodos()
  const [loads, setLoads] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setLoads((prev) => prev + 1)
  }, [setLoads])

  const useDelay = loads >= 1 ? false : true

  return (
    <>
      <header className="mx-auto w-10/12 mt-10 flex justify-center">
        <IconButton onClick={() => setModalOpen(true)} icon={<Plus />}>
          Crear todo
        </IconButton>
        <Modal isOpen={modalOpen} closeSender={() => setModalOpen(false)}>
          <TodoForm />
        </Modal>
      </header>
      <main className="mx-auto w-10/12">
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
