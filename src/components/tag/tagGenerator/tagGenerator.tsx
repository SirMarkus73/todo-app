import { useState } from "react"
import css from "./tagGenerator.module.css"

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
    <div className={css.tagsGenerator}>
      Tags:
      <label>
        <input
          name="tag"
          value={tagInputValue}
          onChange={(e) => setTagInputValue(e.target.value)}
          onKeyDown={addTagOnEnter}
        />
        <button onClick={submit} type="button">
          añadir
        </button>
      </label>
    </div>
  )
}
