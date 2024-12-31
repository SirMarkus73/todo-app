import { motion } from "motion/react"
import type React from "react"
import { createPortal } from "react-dom"
import { IconButton } from "./iconButton"
import { Multiplication } from "@/icons/multiplication"

interface Props {
  ref: React.RefObject<HTMLDialogElement | null>
  closeSender: () => void
  children?: React.ReactNode
  isOpen: boolean
}

export function Modal({ ref, closeSender, children, isOpen }: Props) {
  const root = document.querySelector("#root")
  if (!root) return null

  return createPortal(
    <dialog
      className="h-[80dvh] w-[90vw] rounded-lg bg-zinc-800/90 p-3 backdrop:bg-zinc-800/20 md:p-6"
      ref={ref}
    >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-2"
        >
          <IconButton
            onClick={closeSender}
            icon={<Multiplication />}
            type="button"
            className="self-end"
          />
          {children}
        </motion.div>
      )}
    </dialog>,
    root,
  )
}
