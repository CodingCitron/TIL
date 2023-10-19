/* Pipe는 프로그램의 output이 다른 프로그램의 input으로 전달되는 매커니즘을 말한다. */
function pipe(...funcs) {
  return (initial)=> funcs.reduce((result, func) => {
    return func(result);
  }, initial);
}

/* 참조: https://velog.io/@keumky1/%ED%95%A8%EC%88%98%ED%98%95-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Pipe%EB%A1%9C-%EA%B0%80%EB%8F%85%EC%84%B1%EC%9D%84-%ED%96%A5%EC%83%81%EC%8B%9C%ED%82%A4%EC%9E%90 */