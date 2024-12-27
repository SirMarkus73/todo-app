import { useReducer } from "react"
import type { ListOfTodos, PublicTodo, TodoId } from "../types"

type ReducerAction =
  | { type: "add_todo"; value: PublicTodo }
  | { type: "remove"; value: TodoId }

function reducer(prevTodos: ListOfTodos, action: ReducerAction): ListOfTodos {
  switch (action.type) {
    case "add_todo": {
      const { title, description, tags } = action.value

      let newId = 0
      prevTodos.forEach((todo) => {
        if (todo.id >= newId) newId = todo.id + 1
      })

      return [...prevTodos, { id: newId, title, description, tags }]
    }
    case "remove": {
      const newTodos = prevTodos.filter((todo) => todo.id !== action.value.id)
      return newTodos
    }
    default:
      return prevTodos
  }
}

export function useTodos({ initialTodos }: { initialTodos: ListOfTodos }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  function add_todo({ title, description, tags }: PublicTodo) {
    dispatch({ type: "add_todo", value: { title, description, tags } })
  }

  function remove_todo({ id }: { id: TodoId }) {
    dispatch({ type: "remove", value: id })
  }

  return {
    todos,
    add_todo,
    remove_todo,
  }
}
