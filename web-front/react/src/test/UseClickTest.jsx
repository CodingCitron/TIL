import React, { useRef } from 'react'
import useClick from '../hooks/useClick'

const sayHello = () => {
    console.log("sayHello")
}

const UseClickTest = () => {


    const title = useClick(sayHello)
    
    return (
        <div ref={title}>UseClickTest</div>
    )
}

export default UseClickTest