/* 여러 개의 인자를 받는 함수가 있을 때 일부의 인자를 고정한 함수를 만드는 기법 */
/* 참조: https://www.zerocho.com/category/JavaScript/post/579236d08241b6f43951af18 */
Function.prototype.partial = function() {
  var args = [].slice.apply(arguments);
  var self = this;
  return function() {
    return self.apply(null, args.concat([].slice.apply(arguments)));
  };
};