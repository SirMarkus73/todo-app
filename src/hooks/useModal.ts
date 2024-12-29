import { useRef } from "react"

export function useModal() {
  const ref = useRef<HTMLDialogElement>(null)
  const closeModal = () => {
    ref.current?.close()
  }

  const openModal = () => {
    ref.current?.showModal()
  }

  return {
    ref,
    closeModal,
    openModal,
  }
}
