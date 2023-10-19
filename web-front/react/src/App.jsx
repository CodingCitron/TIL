import Sidebar from '@components/Sidebar'
import { useState } from 'react'

const menus = [

]

function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <div className='wrap'>
        <Sidebar 
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
