import { AnimatePresence, motion } from "motion/react"
import { Tag } from "./tag"

interface Props {
  tags: string[]
  removeTag: ({ tag }: { tag: string }) => void
}

export function TagList({ tags, removeTag }: Props) {
  return (
    <motion.ul layout className="mb-10 flex flex-wrap gap-4 text-sm">
      <AnimatePresence>
        {tags.map((tag) => (
          <Tag key={tag}>
            <span className="capitalize">{tag}</span>
            <motion.button
              type="button"
              onClick={() => removeTag({ tag })}
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 180 }}
            >
              X
            </motion.button>
          </Tag>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}
