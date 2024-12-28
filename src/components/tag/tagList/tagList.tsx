interface Props {
  tags: string[]
  removeTag: ({ tag }: { tag: string }) => void
}

export function TagList({ tags, removeTag }: Props) {
  return (
    <ul className="flex gap-4 text-sm">
      {tags.map((tag, i) => (
        <li
          key={`${tag}-${i}`}
          className="flex gap-2 py-2 px-4 border border-slate-500 rounded-md bg-purple-700/15"
        >
          {tag}
          <button onClick={() => removeTag({ tag })}>X</button>{" "}
        </li>
      ))}
    </ul>
  )
}
