import { createPortal } from "react-dom"

interface Props {
  children: React.ReactNode
}

export function Portal({ children }: Props) {
  const portalRoot = document.querySelector("#portals")

  if (!portalRoot) {
    throw new Error("No portal root found")
  }

  return createPortal(children, portalRoot)
}
