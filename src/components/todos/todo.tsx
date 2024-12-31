import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { useTodos } from "@/hooks/useTodos.ts"
import type { Todo as TodoInterface } from "@/types.d.ts"

interface Props extends TodoInterface {
  startingDelay?: number
}

const articleVariants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  show: (startingDelay: number) => ({
    transition: { duration: 1, delay: startingDelay },
    clipPath: "inset(0 0 0 0)",
  }),
}

const defaultDelay = 0.666

export function Todo({
  id,
  title,
  description,
  tags,
  startingDelay = defaultDelay,
}: Props) {
  const [isActive, setActive] = useState(true)
  const { removeTodo } = useTodos()

  const onClickRemoveTodo = () => {
    setActive(!isActive)
  }

  const onExitComplete = () => {
    removeTodo({ id })
  }

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isActive && (
        <motion.article
          className="grid gap-3 rounded-md border border-slate-600 p-4"
          layout
          transition={{ duration: 0.65, type: "spring", bounce: 0.333 }}
          variants={articleVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          custom={startingDelay}
        >
          <h2 className="text-balance font-bold text-2xl">{title}</h2>
          <p className="text-wrap break-all">{description}</p>
          {tags && (
            <ul className="flex flex-wrap gap-2">
              {tags.map((tagName, index) => (
                <motion.li
                  key={tagName}
                  className="rounded-md border border-slate-500 bg-purple-400/15 px-2 py-1 text-white"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: index + 0.8 * 0.5 + startingDelay,
                    },
                  }}
                >
                  {tagName}
                </motion.li>
              ))}
            </ul>
          )}
          <button
            type="button"
            className="self-end"
            onClick={onClickRemoveTodo}
          >
            Eliminar
          </button>
        </motion.article>
      )}
    </AnimatePresence>
  )
}
