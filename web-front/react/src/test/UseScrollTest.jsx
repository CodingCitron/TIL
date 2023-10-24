import useScroll from "../hooks/useScroll"

const UseScrollTest = () => {
const {y} = useScroll()

  return (
    <div style={
      {
        position: "absolute",
        width: "100%",
        height: "1000vh",
        pointerEvents: "none",
      }
    }>
      <h1 style={
        {
          width: "50px",
          height: "50px",
          position: "fixed",
          color: y > 100 ? "red" : "blue"
        }
      }>테스트</h1>
    </div>
  )
}

export default UseScrollTest