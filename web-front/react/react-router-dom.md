[react-router docs](https://reactrouter.com/en/main)
[react-router 정리](https://velog.io/@tjdgus0528/React-Router-v6-%EC%A0%95%EB%A6%AC)
[querystring 사용하기](https://systorage.tistory.com/entry/React-React-Router-v6%EC%97%90%EC%84%9C-query-parameter-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B2%95)

# 설치

```shell
npm install react-router-dom
```

## 사용법 1

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```
