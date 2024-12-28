import { useState } from "react"
import { Plus } from "../../../icons/plus"
import { Multiplication } from "../../../icons/multiplication"

interface Props {
  onUpdate: ({ tagValue }: { tagValue: string }) => void
  removeAll: () => void
}

export function TagGenerator({ onUpdate, removeAll }: Props) {
  const [tagInputValue, setTagInputValue] = useState<string>("")

  const addTagOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      setTagInputValue("")
      onUpdate({ tagValue: tagInputValue })
    }
  }

  const submit = () => {
    onUpdate({ tagValue: tagInputValue })
    setTagInputValue("")
  }

  return (
    <div className="flex flex-col md:flex-row justify-between">
      Tags:
      <label className="md:w-3/4 border border-slate-500  rounded-md p-1 flex justify-between">
        <input
          name="tag"
          placeholder="react"
          className="flex-1"
          value={tagInputValue}
          onChange={(e) => setTagInputValue(e.target.value)}
          onKeyDown={addTagOnEnter}
        />
        <div className="flex gap-2">
          <button
            onClick={submit}
            type="button"
            aria-label="insertar una nueva tarea"
          >
            <Plus />
          </button>
          <button
            onClick={removeAll}
            type="button"
            aria-label="eliminar todas las tareas"
          >
            <Multiplication />
          </button>
        </div>
      </label>
    </div>
  )
}
