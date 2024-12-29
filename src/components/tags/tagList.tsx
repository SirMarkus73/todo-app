import { AnimatePresence, motion } from "motion/react"

interface Props {
  tags: string[]
  removeTag: ({ tag }: { tag: string }) => void
}

export function TagList({ tags, removeTag }: Props) {
  return (
    <motion.ul layout className="mb-10 flex flex-wrap gap-4 text-sm">
      <AnimatePresence>
        {tags.map((tag) => (
          <motion.li
            key={tag}
            layoutId={tag}
            initial={{ scale: 0, y: "100%", opacity: 0 }}
            animate={{
              scale: [1, 1, 1],
              y: ["100%", "100%", 0],
              opacity: 1,
            }}
            exit={{
              scale: 0,
            }}
            className="flex gap-2 rounded-md border border-slate-500 bg-purple-700/15 px-4 py-2 text-white"
          >
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
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}
