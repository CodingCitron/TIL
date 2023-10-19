/* https://hajoeun.blog/daily-fp-pick */
/* 많은 데이터를 가진 객체 하나에서 여러 개의 값을 꺼내오기 */

var user_1 = { // [1] 기존의 데이터
  id: 1,
  first_name: 'Joeun',
  last_name: 'Ha',
  age: 28,
  country: 'South Korea',
  city: 'Seoul',
  mobile_phone: '010-0000-0000',
  email: 'imjoeunha@gmail.com',
  blog_url: 'http://hajoeun.blog',
};

/*
var user_data = { // [2] 필요한 데이터
  id: user_1.id,
  first_name: user_1.first_name,
  last_name: user_1.last_name
};
*/

function pick(target, keys) {
  return keys.reduce(function(obj, key) {
    return obj[key] = target[key], obj;
  }, {});
}

console.log(pick(user_1, ['age', 'id'])); // [2] 출력 결과는 { age: 28, id: 1 } 입니다. 이때, 객체 값의 순서가 배열로 전달한 키의 순서대로 반환됩니다.