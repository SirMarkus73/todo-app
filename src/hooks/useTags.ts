import { useState } from "react"

export function useTags() {
  const [tags, setTags] = useState<string[]>([])

  const removeAllTags = () => {
    setTags([])
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

  return {
    tags,
    updateTags,
    removeTag,
    removeAllTags,
  }
}
