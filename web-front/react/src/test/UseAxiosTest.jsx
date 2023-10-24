import React from 'react'
import useAxios from '../hooks/useAxios'

const UseAxiosTest = () => {
    const { loading, data, error, refetch } = useAxios({ url: "https://yts.am/api/v2/list_movies.json" })

    console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`)

  return (
    <div>UseAxiosTest
        <h1>{data && data.status}</h1>
        <h2>{loading && "Loading"}</h2>
        <button onClick={refetch}>
            refetch
        </button>
    </div>
  )
}

export default UseAxiosTest