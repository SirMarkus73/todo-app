import "./App.css"
import { TodoForm } from "./components/todoForm/todoForm"
import { Todo } from "./components/todo/todo"
import { TodoList } from "./components/todoList/todoList"

function App() {
  return (
    <>
      <header>
        <TodoForm />
      </header>
      <main>
        <TodoList>
          <Todo
            id={1}
            title="pasear al perro"
            description="tengo que ir a pasear al perro a las 18:00"
            tags={["paseo", "mascota"]}
          />
          <Todo
            id={2}
            title="Programar aplicación todo"
            description="tengo que continuar programando esta aplicación porque es muy importante para aprender"
          />
          <Todo
            id={3}
            title="Programar aplicación todo"
            description="tengo que continuar programando esta aplicación porque es muy importante para aprender"
          />
          <Todo
            id={4}
            title="Programar aplicación todo"
            description="tengo que continuar programando esta aplicación porque es muy importante para aprender"
          />
        </TodoList>
      </main>
    </>
  )
}

export default App
