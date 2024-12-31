import { motion } from "motion/react"
import type React from "react"
import { IconButton } from "./iconButton"
import { Multiplication } from "@/icons/multiplication"
import { Portal } from "./portal"
import { Plus } from "@/icons/plus"
import { useModal } from "@/hooks/useModal"

interface Props {
  children?: React.ReactNode
}

export function Modal({ children }: Props) {
  const { ref, openModal, closeModal, isOpen: modalIsOpen } = useModal()

  return (
    <>
      <IconButton onClick={openModal} icon={<Plus />} type="button">
        Crear todo
      </IconButton>
      <Portal>
        <dialog
          className="h-[80dvh] w-[90vw] rounded-lg bg-zinc-800/90 p-3 backdrop:bg-zinc-800/20 md:p-6"
          ref={ref}
        >
          {modalIsOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-2"
            >
              <IconButton
                onClick={closeModal}
                icon={<Multiplication />}
                type="button"
                className="self-end"
              />
              {children}
            </motion.div>
          )}
        </dialog>
      </Portal>
    </>
  )
}
