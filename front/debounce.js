/* 입력 주기가 끝나면, 출력 */
/* https://codepen.io/ondrabus/pen/WNGaVZN */
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

