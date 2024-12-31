import { TodoForm } from "./components/todos/todoForm"
import { TodoList } from "./components/todos/todoList"
import { Modal } from "@/components/ui/modal"
import { TagsFilter } from "./components/tags/tagsFilter"

function App() {
  return (
    <>
      <header className="mx-auto mt-10 flex w-10/12 justify-center">
        <Modal>
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
