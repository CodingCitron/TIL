import useNetwork from "../hooks/useNetWork"

const UseNetworkTest = () => {
  const handleNetwork = (online) => {
    console.log(online ? "We just went online" : "We just went offline")
  }

  const online = useNetwork(handleNetwork)
  
  return (
    <div>
      {online ? "online" : "offline"}
    </div>
  )
}

export default UseNetworkTest