import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const CustomFooter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>© 2020 - {year} Stensin. Enutheta is an original universe concept and world setting.</p>
        <ul>
          <li>
            <a href="https://lore.enutheta.com" target="_blank" rel="noopener noreferrer">
              Visit the Enutheta lore archives
            </a>
          </li>
        </ul>
      </footer>
    )
  }

  return CustomFooter
}) satisfies QuartzComponentConstructor