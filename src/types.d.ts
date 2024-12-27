export interface Todo {
  id: number
  title: string
  description: string
  tags?: string[]
}

export type TodoId = Pick<Todo, "id">
export type PublicTodo = Omit<Todo, "id">
export type ListOfTodos = Todo[]
