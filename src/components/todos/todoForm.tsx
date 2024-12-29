import { useState } from "react"
import { useTodos } from "../../hooks/useTodos"
import { TagGenerator } from "../tags/tagGenerator"
import { TagList } from "../tags/tagList"

export function TodoForm() {
  const { insertTodo } = useTodos()
  const [tags, setTags] = useState<string[]>([])

  const removeAllTags = () => {
    setTags([])
  }

  const onSubmit = (formdata: FormData) => {
    const title = String(formdata.get("title"))
    const description = String(formdata.get("description"))
    console.log(formdata.get("tags"))

    insertTodo({ title, description, tags })
    removeAllTags()
  }
  const removeTag = ({ tag }: { tag: string }) => {
    setTags((prev) => {
      const filteredTags = prev.filter((filterTag) => {
        if (filterTag !== tag) return true
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
      className="mx-auto flex flex-col content-around gap-3"
      action={onSubmit}
    >
      <legend className="text-2xl">Crear todo (tareas por hacer)</legend>
      <label className="flex flex-col justify-between md:flex-row">
        Titulo:
        <input
          type="text"
          name="title"
          required
          placeholder="Estudiar react"
          className="rounded-md border border-slate-500 p-1 md:w-3/4"
        />
      </label>
      <label className="flex flex-col justify-between md:flex-row">
        Descripción:
        <textarea
          name="description"
          required
          placeholder="Tengo que estudiar react hoy a la tarde el `useEffect()...`"
          className="field-sizing-content rounded-md border border-slate-500 p-1 md:w-3/4"
        />
      </label>
      <TagGenerator onUpdate={updateTags} removeAll={removeAllTags} />
      <TagList tags={tags} removeTag={removeTag} />

      <button type="submit" className="rounded-md border border-slate-400">
        Crear todo
      </button>
    </form>
  )
}
