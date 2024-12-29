interface Props {
  icon: React.ReactNode
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function IconButton({ icon, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 border border-slate-600 bg-slate-500/20 hover:bg-slate-500/40 transition-colors p-3 rounded-md"
    >
      {icon}
      {children}
    </button>
  )
}
