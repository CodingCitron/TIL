/* 함수 합성
함수 합성은 함수들을 조합하여 새로운 함수를 만드는 것이다. 인자로 x가 주어진 함수 a의 결과값을 함수 b에 적용한다. 다시 말해, 함수 a와 함수 b를 합성한다.
*/

/* 함수를 좀 더 명시적으로 합성해주는 함수 compose() */
const compose = (...funcs) => (initialVal) => funcs.reduceRight((val, fn) => fn(val), initialVal);

/* compose() 함수를 좀 더 유연하게 만들어 함수를 갯수 제한 없이 받기 */
const pipe = (...funcs) => (initialVal) => funcs.reduce((val, fn) => fn(val), initialVal);

/* 배열의 요소를 뒤에서부터 순환하며 리듀스를 수행한다. */
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

/* 참조: https://velog.io/@nittre/JavaScript-%ED%95%A8%EC%88%98-%ED%95%A9%EC%84%B1Function-Composition */