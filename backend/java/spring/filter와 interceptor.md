https://mangkyu.tistory.com/173

## interceptor

### preHandle
컨트롤러 호출 전에 호출되는 메소드이다. preHandle()의 반환타입은 boolean 이다. 만약 preHandle() 이 false 를 반환한다면, 다음 HandlerInterceptor 혹은 컨트롤러를 실행하지 않는다.

### postHandle
컨트롤러가 정상적으로 실행된 이후에 실행되는 메소드이다. 컨트롤러에서 예외가 발생한다면, postHandle() 메소드는 실행되지 않는다.

### afterCompletion
뷰가 클라이언트에 응답을 전송한 뒤에 실행된다. 컨트롤러 실행과정에서 예외가 발생한 경우 해당 예외가 afterCompletion() 메소드의 4번째 파라미터로 전달되어, 로그로 남기는 등 후처리를 위해 사용될 수 있다.

[인터셉터 사용 중복 코드 제거](https://hudi.blog/spring-handler-interceptor/)

[인터셉터에서 redirect 사용하기](https://pooney.tistory.com/33)