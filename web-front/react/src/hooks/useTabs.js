import { useState } from "react"

const useTabs = (initialTab, allTabs) => {
    if(!allTabs || !Array.isArray(allTabs)) {
        return
    }

    const [currentIndex, setCurrentIndex] = useState(initialTab)

    return {
        curretItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
}

export default useTabs