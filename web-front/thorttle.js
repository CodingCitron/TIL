/*
일정 시간 간격으로 이벤트 핸들러가 최대 한 번만 호출 함수
*/
export const throttle = (callback, delay) =>{
  let timerId;
  return event => {
    if(timerId) return;
    timerId = setTimeout(()=>{
      callback(event);
      timerId = null;
    }, delay, event);
  };
};