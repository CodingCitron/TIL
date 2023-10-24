import useFadeIn from "../hooks/useFadeIn"

const UseFadeInTest = () => {
  const fadeInH1 = useFadeIn(5000)
  const fadeInP = useFadeIn(5000)
  return (
    <div>
      <h1 {...fadeInH1}>테스트</h1>
      <p {...fadeInP} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis harum ea qui et iusto debitis provident vitae reprehenderit? Earum magnam facere maiores itaque nemo recusandae sed qui voluptates dolorum veritatis.</p>
    </div>
  )
}

export default UseFadeInTest