/*
https://hajoeun.blog/daily-fp-omit
pick 함수의 반대 버전인 omit, 다시 말해 omit은 객체에서 키가 일치하는 프로퍼티를 제외한 새로운 객체를 반환하는 함수
*/

/* pick 함수와 flick 함수 */
var _ = {};

// [1] 제가 작성한 pick 함수입니다. 기존의 pick과 크게 다르지 않습니다.
_.pick = (target, ...keys) => {
  if (typeof keys[0] == 'function') {

    var predicate = keys[0];
    keys = Object.keys(target);

    return keys.reduce((obj, key) => {
      return predicate(target[key], key, target) ? (obj[key] = target[key], obj) : obj;
    }, {})
  }

  return keys.reduce((obj, key) => {
    return obj[key] = target[key], obj;
  }, {});
};

// [2] Robert.Cutright이라는 개발자가 작성한 flick 함수입니다. omit 함수와 같은 일을 합니다.
_.flick = (target, ...keys) => {
  if (typeof keys[0] == 'function') {

    var predicate = keys[0];
    keys = Object.keys(target);

    return keys.reduce((obj, key) => {
      return predicate(target[key], key, target) ? obj : (obj[key] = target[key], obj);
    }, {})
  }

  var obj = Object.assign({}, target);
  Object.keys(obj).filter(key => keys.includes(key) ? delete obj[key] : obj[key]);
  return obj;
};

_.omit = (target, ...keys) => {
  if (typeof keys[0] == 'function') {
      var predicate = keys[0];
    return _.pick(target, (...args) => !predicate(...args)) // [1] pick을 사용하고 predicate를 뒤집었습니다.
  }

  return Object.keys(target).reduce((obj, key) => { // [2] reduce를 사용하면서 새로운 객체를 복사한 뒤 요소를 제거하지 않고 바로 생성합니다.
    return keys.includes(key) ? obj : (obj[key] = target[key], obj);
  }, {});
};