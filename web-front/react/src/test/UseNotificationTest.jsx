import useNotification from "../hooks/useNotification"

const UseNotificationTest = () => {
const triggerNotif = useNotification("Can I steal your kimchi", {
  body: "I love kimchi dont you"
})

  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  )
}

export default UseNotificationTest