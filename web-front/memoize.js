/* https://d2.naver.com/helloworld/9223303 */
function memoize(func) {  
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("Fetching result from cache...");
      return cache[key];
    }

    console.log("Computing result...");
    const result = func(...args);
    cache[key] = result;
    return result;
  };
}