/* Zip 함수는 전달된 요소들의 배열을 다른 배열의 요소와 결합하는 자바스크립트 함수 */
function zip(...arrays) {
  const maxLength = Math.max(...arrays.map(array => array.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, j) => arrays[j][i]);
  });
}
