import { useState } from "react"

interface Props {
  onUpdate: ({ tagValue }: { tagValue: string }) => void
}

export function TagGenerator({ onUpdate }: Props) {
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
    <div className="flex justify-between">
      Tags:
      <label className="w-3/4 border border-slate-500  rounded-md p-1">
        <input
          name="tag"
          placeholder="react"
          value={tagInputValue}
          onChange={(e) => setTagInputValue(e.target.value)}
          onKeyDown={addTagOnEnter}
          className="w-3/4"
        />
        <button onClick={submit} type="button" className="w-1/4">
          añadir
        </button>
      </label>
    </div>
  )
}
