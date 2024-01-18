import { url } from "inspector"
import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"


interface Options {
  href: string,
  title: string,
}


export default ((opts?: Options) => {
  function Hyperlink({ displayClass }: QuartzComponentProps) {
    const href = opts?.href ?? ""
    const title = opts?.title ?? ""

    return (
      <span class={`single-link ${displayClass ?? ""}`}>
        <a href={href}>{title}</a>
      </span>
    )
  }
  // Hyperlink.css = ``
  return Hyperlink
}) satisfies QuartzComponentConstructor
