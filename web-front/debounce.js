/* 입력 주기가 끝나면, 출력 */
/* https://codepen.io/ondrabus/pen/WNGaVZN */
export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export const debounce2 = (callback, delay) =>{
  let timerId;
  return event => {
    if(timerId) clearTimeout(timerId)
    timerId = setTimeout(callback, delay, event);
  };
};

