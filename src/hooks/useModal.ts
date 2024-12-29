import { useRef, useState } from "react"

export function useModal() {
  const ref = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    ref.current?.close()
    setIsOpen(false)
  }

  const openModal = () => {
    ref.current?.showModal()
    setIsOpen(true)
  }

  return {
    ref,
    closeModal,
    openModal,
    isOpen,
  }
}
