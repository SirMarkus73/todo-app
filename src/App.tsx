import { TodoForm } from "./components/todos/todoForm"
import { TodoList } from "./components/todos/todoList"
import { IconButton } from "./components/ui/iconButton"
import { Modal } from "@/components/ui/modal"
import { Plus } from "./icons/plus"
import { useModal } from "./hooks/useModal"
import { TagsFilter } from "./components/tags/tagsFilter"

function App() {
  const { ref: modalRef, openModal, closeModal, isOpen: modalOpen } = useModal()

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
        <TodoList />
      </main>
    </>
  )
}

export default App
