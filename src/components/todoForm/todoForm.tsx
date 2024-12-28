import { useState } from "react"
import { useTodos } from "../../hooks/useTodos"
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
    <form
      className="flex flex-col mx-auto content-around gap-3"
      action={onSubmit}
    >
      <legend className="text-2xl">Crear todo (tareas por hacer)</legend>
      <label className="flex flex-col md:flex-row justify-between">
        Titulo:
        <input
          type="text"
          name="title"
          required
          placeholder="Estudiar react"
          className="border border-slate-500 rounded-md p-1 w-3/4"
        />
      </label>
      <label className="flex flex-col md:flex-row justify-between">
        Descripción:
        <textarea
          name="description"
          required
          placeholder="Tengo que estudiar react hoy a la tarde el `useEffect()...`"
          className="border border-slate-500 rounded-md p-1 w-3/4"
        ></textarea>
      </label>
      <TagGenerator onUpdate={updateTags} />
      <TagList tags={tags} removeTag={removeTag} />

      <button type="submit" className="border border-slate-400 rounded-md">
        Crear todo
      </button>
    </form>
  )
}
