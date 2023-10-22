import React from 'react'
import usePreventLeave from '../hooks/usePreventLeave'

const UsePreventLeaveTest = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave() 

  return (
    <div>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
    </div>
  )
}

export default UsePreventLeaveTest