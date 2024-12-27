export interface Todo {
  id: number
  title: string
  description: string
  tags?: string[]
}

export type TodoId = Todo["id"]
export type PublicTodo = Omit<Todo, "id">
export type ListOfTodos = Todo[]
