import clsx from "clsx"
import { useState } from "react"

export default function Home() {
  const [vis, setVis] = useState(true)

  return (
    <main className={clsx("fixed top-50 bottom-8 inset-x-1/12", "text-center")}>
      <div
        className={clsx(
          "aspect-video p-4 rounded-3xl",
          "bg-(--accent) opacity-90",
          "flex justify-center items-center",
          "fixed top-1/3 right-5",
          vis ? "" : "hidden",
        )}
      >
        mini app
      </div>
    </main>
  )
}
