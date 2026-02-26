import { QuartzComponent, QuartzComponentConstructor } from "./types"

const CustomFooter: QuartzComponent = () => {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      textAlign: "center",
      marginTop: "2rem",
      padding: "1rem",
      opacity: 0.7,
      fontSize: "0.9rem"
    }}>
      <div>
        © {year} Stensin. Enutheta is an original universe concept and world setting.
      </div>
      <div>
        <a href="https://lore.enutheta.com">
          Enutheta lore archives.
        </a>
      </div>
    </footer>
  )
}

export default (() => CustomFooter) satisfies QuartzComponentConstructor