import useFullScreen from "../hooks/useFullScreen"

const UseFullScreenTest = () => {
  const { element, triggerFull, exitFull } = useFullScreen()

  return (
    <div>
      <div ref={element}>
        <img 
          src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width={250} 
        />
        <button onClick={exitFull}>종료 풀스크린</button>
      </div>
      <button onClick={triggerFull}>풀스크린</button>
    </div>
  )
}

export default UseFullScreenTest