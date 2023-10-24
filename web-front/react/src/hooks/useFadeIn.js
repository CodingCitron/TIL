import { useEffect, useRef } from "react"

const useFadeIn = (duration = 1, delay = 0) => {
  if(typeof duration !== "number" || typeof delay !== "number") {
    return
  }

  const element = useRef()

  useEffect(() => {
    if(element.current) {
      const { current } = element
      current.style.transition = `opacity ${duration}ms ease-in-out ${delay}ms`
      current.style.opacity = 1
    }
  }, [element])

  return {
    ref: element, 
    style: {
      opacity: 0
    }
  }
}

export default useFadeIn