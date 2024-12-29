import { motion } from "motion/react"

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <motion.li
      layout
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
      {children}
    </motion.li>
  )
}
