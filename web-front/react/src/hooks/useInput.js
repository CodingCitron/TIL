import { useState } from "react"

const maxLen = (value, maxLength) => value.length <= maxLength
const useInput = (initialValue, maxLength) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {
            target: { value }
        } = event

        let willUpdate = true

        if(maxLength && maxLength >= 0) {
            willUpdate = maxLen(value, maxLength)
        }

        if(willUpdate) {
            setValue(value)
        }
    }

    return { value, onChange }
};

export default useInput