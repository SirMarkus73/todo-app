import css from "./tagList.module.css"

interface Props {
  tags: string[]
  removeTag: ({ tag }: { tag: string }) => void
}

export function TagList({ tags, removeTag }: Props) {
  return (
    <ul className={css.tagsList}>
      {tags.map((tag, i) => (
        <li key={`${tag}-${i}`}>
          {tag}
          <button onClick={() => removeTag({ tag })}>X</button>{" "}
        </li>
      ))}
    </ul>
  )
}
