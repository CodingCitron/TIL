import defaultAxios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    })
    
    const [trigger, setTrigger] = useState(0)

    if(!options.url) {
        return
    }

    const refetch = () => {
        setState({
            ...state,
            laoding: true
        })

        setTrigger(Date().now())
    }

    useEffect(() => {
        axiosInstance(options).then(response => {
            setState({
                ...state,
                loading: false,
                data
            })
        }).catch(error => {
            setState({...state, loading: false, error})
        })
    }, [trigger])

    return {...state, refetch}
}

export default useAxios