import { useEffect, useRef, useState } from 'react'

import Sidebar from '@components/Sidebar'
import Navbar from '@components/Navbar'
import NavbarItem from './components/NavbarItem'
import DropdownMenu from './components/DropdownMenu'
import UseInputTest from './test/UseInputTest'
import UseTabsTest from './test/UseTabsTest'
import UseTitleTest from './test/UseTitleTest'
import UseClickTest from './test/UseClickTest'
import UseConfirmTest from './test/UseConfirmTest'
import UsePreventLeaveTest from './test/UsePreventLeaveTest'

const menus = [

]

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const sidebar = useRef()

  useEffect(() => {
    const handler = (event) => {
      if(!sidebar.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [sidebar])

  return (
    <>
      <div className='wrap'>
        <Sidebar
          ref={sidebar}
          isOpen={isOpen}
          closeBtn={() => setIsOpen(false)}
        />
        <div className='main'>
          <button onClick={() => setIsOpen(true)}>
            open-btn
          </button>
          <div>
            <Navbar>
              <NavbarItem />
              <NavbarItem />
              <NavbarItem />
              <NavbarItem />
              <NavbarItem>
                <DropdownMenu />
              </NavbarItem>
              <NavbarItem />
            </Navbar>
          </div>
          {/* test */}
          <div>
            <UseInputTest />
            <UseTabsTest />
            <UseTitleTest />
            <UseClickTest />
            <UseConfirmTest />
            <UsePreventLeaveTest />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
