// 데이터가 아직 저장되지 않았을 때
const usePreventLeave = (onLeaving) => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = ""
    }
    const enablePrevent = () => window.addEventListener('beforeunload', listener)
    const disablePrevent = () => window.removeEventListener('beforeunload', listener)

    return {
        enablePrevent,
        disablePrevent
    }
}

export default usePreventLeave