import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
interface Props {
  isOpen: boolean
  closeSender: () => void
  children?: React.ReactNode
}

export function Modal({ isOpen, closeSender, children }: Props) {
  const root = document.querySelector("#root")
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!modalRef.current) return

    if (isOpen) {
      modalRef.current.showModal()
    } else {
      modalRef.current.close()
    }
  }, [isOpen])

  if (!root) return null

  return createPortal(
    <dialog className="h-[80dvh] w-[90vw] p-8 bg-zinc-800/90" ref={modalRef}>
      <button
        onClick={closeSender}
        type="button"
        className="float-end p-3 border border-slate-500 m-2 rounded-md"
        autoFocus
      >
        cerrar
      </button>
      {children}
    </dialog>,
    root,
  )
}
