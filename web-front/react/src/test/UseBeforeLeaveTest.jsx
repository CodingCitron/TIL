import React from 'react'
import useBeforeLeave from '../hooks/useBeforeLeave'

const UseBeforeLeaveTest = () => {
    const begForLife = () => console.log("Pls dont leave")

    useBeforeLeave(begForLife)

  return (
    <div>UseBeforeLeaveTest</div>
  )
}

export default UseBeforeLeaveTest