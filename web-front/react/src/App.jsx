import Sidebar from '@components/Sidebar'
import { useEffect, useRef, useState } from 'react'

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
          테스트
        </div>
      </div>
    </>
  )
}

export default App
