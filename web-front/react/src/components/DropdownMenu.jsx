import { useState } from "react"
import { CSSTransition } from 'react-transition-group'

const DropdownMenu = ({ goToMenu }) => {

  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight (el) {
    const height = el.offsetHeight;
    setMenuHeight(height)
  }

  const DropdownMenuItem = ({ children, leftIcon, rightIcon }) => {
    return (
      <a href="#" className="menu-item" onClick={goToMenu && setActiveMenu(goToMenu)}>
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{height: menuHeight}}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
        <div className="menu">
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary">
        <div className="menu">
          <DropdownMenuItem>
            My Profile
          </DropdownMenuItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu