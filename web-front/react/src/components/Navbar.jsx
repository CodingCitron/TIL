/* https://www.youtube.com/watch?v=IF6k0uZuypA */
const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        { children }
      </ul>
    </nav>
  )
}

export default Navbar