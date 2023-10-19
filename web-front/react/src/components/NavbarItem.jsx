import { useState } from "react"

const NavbarItem = ({ children, icon, path }) => {

  const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
      <a href={path} className="icon-button" onClick={() => setOpen(!open)}>
        { icon }
      </a>

      {open && children}
    </li>
  )
}

export default NavbarItem