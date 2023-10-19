const Sidebar = ({ children, isOpen, closeBtn }) => {

  return (
    <aside className={isOpen ? "sidebar open" : "sidebar"}>
      <button onClick={closeBtn}>
        close-btn
      </button>
      { children }
    </aside>
  )
}

export default Sidebar