import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer2({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          Zeyus' vault is generated with <a href="https://quartz.jzhao.xyz/">Quartz</a>,{" "}
          vault source code is available <a href="https://github.com/zeyus/vault">on GitHub</a>.
          &copy; {year} <a href="https://github.com/zeyus">Zeyus</a>. Licensed under the{" "}
          <a href="https://github.com/zeyus/vault/blob/master/LICENSE">MIT license</a>.
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer2.css = style
  return Footer2
}) satisfies QuartzComponentConstructor
