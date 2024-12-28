import { useState } from "react"
import { useTodos } from "../../hooks/useTodos"
import "./todoForm.css"
import { TagGenerator } from "../tag/tagGenerator/tagGenerator"
import { TagList } from "../tag/tagList/tagList"

export function TodoForm() {
  const { insertTodo } = useTodos()
  const [tags, setTags] = useState<string[]>([])

  const onSubmit = (formdata: FormData) => {
    const title = String(formdata.get("title"))
    const description = String(formdata.get("description"))
    console.log(formdata.get("tags"))

    insertTodo({ title, description, tags })
    setTags([])
  }
  const removeTag = ({ tag }: { tag: string }) => {
    setTags((prev) => {
      const filteredTags = prev.filter((filterTag) => {
        if (filterTag != tag) return true
      })

      return filteredTags
    })
  }
  const updateTags = ({ tagValue }: { tagValue: string }) => {
    setTags((prev) => {
      if (tagValue === "" || prev.find((el) => el === tagValue)) {
        return prev
      }
      return [...prev, tagValue]
    })
  }

  return (
    <form className="todo-form" action={onSubmit}>
      <legend>Crear todo (tareas por hacer)</legend>
      <label>
        Titulo:
        <input type="text" name="title" required placeholder="Estudiar react" />
      </label>
      <label>
        Descripción:
        <textarea
          name="description"
          required
          placeholder="Tengo que estudiar react hoy a la tarde el `useEffect()...`"
        ></textarea>
      </label>
      <TagGenerator onUpdate={updateTags} />
      <TagList tags={tags} removeTag={removeTag} />

      <button type="submit">Crear todo</button>
    </form>
  )
}
