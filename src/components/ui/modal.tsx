import { motion } from "motion/react"
import type React from "react"
import { createPortal } from "react-dom"

interface Props {
  ref: React.RefObject<HTMLDialogElement | null>
  closeSender: () => void
  children?: React.ReactNode
}

export function Modal({ ref, closeSender, children }: Props) {
  const root = document.querySelector("#root")

  if (!root) return

  return createPortal(
    <motion.dialog
      className="h-[80dvh] w-[90vw] rounded-lg bg-zinc-800/90 p-8 backdrop:bg-zinc-800/20"
      ref={ref}
    >
      <button
        onClick={closeSender}
        type="button"
        className="float-end m-2 rounded-md border border-slate-500 p-3"
      >
        cerrar
      </button>
      {children}
    </motion.dialog>,
    root,
  )
}
