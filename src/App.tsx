import { useEffect, useState } from "react"
import { Todo } from "./components/todos/todo"
import { TodoForm } from "./components/todos/todoForm"
import { TodoList } from "./components/todos/todoList"
import { IconButton } from "./components/ui/iconButton"
import { Modal } from "@/components/ui/modal"
import { useTodos } from "./hooks/useTodos"
import { Plus } from "./icons/plus"
import { useModal } from "./hooks/useModal"
import { TagsFilter } from "./components/tags/tagsFilter"

function App() {
  const { todos } = useTodos()
  const [loads, setLoads] = useState(0)
  const { ref: modalRef, openModal, closeModal, isOpen: modalOpen } = useModal()

  useEffect(() => {
    setLoads((prev) => prev + 1)
  }, [])

  const useDelay = loads >= 1

  return (
    <>
      <header className="mx-auto mt-10 flex w-10/12 justify-center">
        <IconButton onClick={openModal} icon={<Plus />} type="button">
          Crear todo
        </IconButton>
        <Modal closeSender={closeModal} ref={modalRef} isOpen={modalOpen}>
          <TodoForm />
        </Modal>
      </header>
      <main className="mx-auto w-10/12">
        <TagsFilter />
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
