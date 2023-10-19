import { forwardRef } from "react"
import propTypes from 'prop-types'

const Sidebar = forwardRef(({ children, isOpen, closeBtn }, ref) => {

  return (
    <aside className={isOpen ? "sidebar open" : "sidebar"} ref={ref}>
      <button onClick={closeBtn}>
        close-btn
      </button>
      { children }
    </aside>
  )
})

Sidebar.displayName = "Sidebar"

Sidebar.propTypes = {
  children: propTypes.element,
  isOpen: propTypes.bool,
  closeBtn: propTypes.func
}

export default Sidebar