interface Props {
  icon: React.ReactNode
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type: "submit" | "reset" | "button" | undefined
  className?: string
}

export function IconButton({
  icon,
  children,
  onClick,
  type,
  className,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex gap-2 rounded-md border border-slate-600 bg-slate-500/20 p-3 transition-colors hover:bg-slate-500/40`}
      type={type}
    >
      {icon}
      {children}
    </button>
  )
}
