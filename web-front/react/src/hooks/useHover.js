import { useEffect, useRef } from "react"

const useHover = (onHover) => {
    if(typeof onHover !== "function") {
        return
    }

    const element = useRef()

    useEffect(() => {
        if(element.current) {
            element.current.addEventListener('mouseenter', onClick)
        }

        return () => {
            if(element.current) {
                element.current.removeEventListener('mouseenter', onClick)
            }
        }
    }, [])

    return element
}

export default useHover