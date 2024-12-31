import { useState } from "react"
import { Multiplication } from "@/icons/multiplication"

interface Props {
  onUpdate: ({ tagValue }: { tagValue: string }) => void
  removeAll: () => void
}

export function TagGenerator({ onUpdate, removeAll }: Props) {
  const [tagInputValue, setTagInputValue] = useState<string>("")

  const addTagOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === " ") && tagInputValue.trim() !== "") {
      e.preventDefault()
      setTagInputValue("")
      onUpdate({ tagValue: tagInputValue.toLowerCase() })
    }
  }

  return (
    <div className="flex flex-col justify-between md:flex-row">
      Tags:
      <label className="flex justify-between rounded-md border border-slate-500 p-1 md:w-3/4">
        <input
          name="tag"
          placeholder="Tags separadas por espacios"
          className="flex-1"
          value={tagInputValue}
          onChange={(e) => setTagInputValue(e.target.value)}
          onKeyDown={addTagOnEnter}
        />
        <div className="flex gap-2">
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
