Function.prototype.curry = function(one) {
  var origFunc = this;
  var target = origFunc.length;
  var args = [];

  function next(nextOne) {
    args = args.concat(nextOne);
    if (args.length === target) {
      return origFunc.apply(null, args);
    } else {
      return function(nextOne) { return next(nextOne) };
    }
  }
  return next(one);
}

function multiplyThree(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
     }
  };
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

/* multiplyThree(4)(8)(2); // 64 */

/* 커링에 대한 자세한 내용: https://ko.javascript.info/currying-partials */