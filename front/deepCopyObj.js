/* 객체 깊은 복사 함수 */
export function deepCopyObj (obj) {
  if(typeof obj !== "object" || obj === null) return obj
  
  let newObj = Array.isArray(obj) ? [] : {}

  for(const key in obj) {
    let value = obj[key]

    if(typeof value === "object" && value !== null) {
      newObj[key] = deepCopyObj(value)
    } else {
      newObj[key] = value
    } 
  } 

  return newObj
}