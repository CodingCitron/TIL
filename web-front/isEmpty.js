/* 빈값 체크 함수 */
export function isEmpty(value) {
  return (
    value === "" || /* 빈값 */
    value === null ||  /* null */
    value === undefined || /* undefined */
    (value !== null && typeof value === "object" && !Object.keys(val).length) /* 빈 오브젝트, 빈 배열 */
  )
}