import { useEffect, useState } from "react"

export function useFirstLoad() {
  const [loads, setLoads] = useState(0)

  useEffect(() => {
    setLoads((prev) => prev + 1)
  }, [])

  const isFirstLoad = !(loads >= 1)

  return { isFirstLoad }
}
