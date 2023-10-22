import React from 'react'
import useConfirm from '../hooks/useConfirm'

const UseConfirmTest = () => {
    const deleteWorld = () => console.log("Deleting the world")
    const abort = () => console.log("Aborted")
    const confirmDelete = useConfirm("Are yoi sure?", deleteWorld, abort)

  return (
    <button onClick={confirmDelete}>confirmDelete</button>
  )
}

export default UseConfirmTest