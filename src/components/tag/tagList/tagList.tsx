import { motion, AnimatePresence } from "motion/react"

interface Props {
  tags: string[]
  removeTag: ({ tag }: { tag: string }) => void
}

export function TagList({ tags, removeTag }: Props) {
  return (
    <motion.ul
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      layout
      className="flex flex-wrap gap-4 text-sm mb-10"
    >
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
              width: "auto",
            }}
            exit={{
              scale: 0,
              overflow: "clip",
            }}
            className="flex gap-2 py-2 px-4 border border-slate-500 rounded-md bg-purple-700/15 text-white"
          >
            {tag}
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
