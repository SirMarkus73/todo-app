import { useTodos } from "../../hooks/useTodos"
import { Tag } from "./tag"
import { motion } from "motion/react"

const buttonVariants = {
  selected: {
    scale: 1.1,
    color: "orange",
  },
  unselected: {
    scale: 1,
  },
}

export function TagsFilter() {
  const { uniqueTodoTags, setFilter, currentFilter } = useTodos()

  const isSelected = (tag: string) => tag === currentFilter
  const changeFilter = (tag: string) => {
    if (tag === currentFilter) {
      setFilter({ tag: null })
    } else {
      setFilter({ tag })
    }
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {uniqueTodoTags?.map((tag) => (
        <Tag key={tag}>
          <motion.button
            onClick={() => changeFilter(tag)}
            variants={buttonVariants}
            initial="unselected"
            animate={isSelected(tag) ? "selected" : "unselected"}
            type="button"
          >
            {tag}
          </motion.button>
        </Tag>
      ))}
    </ul>
  )
}
