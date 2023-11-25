### node js 설치

- [노드 홈페이지](https://nodejs.org/en)

### VSCODE 설치

### Eslint Extention 설치

### Prettier Extention 설치

- 빈 줄등을 제거를 자동으로 해줌
- 코드 형식을 지정

### 테마 설치

- Material Icon Theme
- One Monokai Theme
- 이외에도 다양한 테마들이 있다.

### Settings 수정

- auto save -> onFocusChange 다른 창으로 이동할때마다 자동 저장
- default formatter -> Prettier - Code formatter 설정
- format on save -> 체크
- eslint run -> on save 저장할때마다 실행

### Nodejs 설치 확인

```shell
node -v
```

### Snippet 설정 - 스니펫은 미리 정의된 코드로 빠른 개발을 위해 사용

- Settings -> User Snippets -> New Global Snippets file... -> react snippets

```json
{
  "Print to console": {
    "prefix": "cl",
    "scope": "javascript,typescript,javascriptreact",
    "body": ["console.log($1)"],
    "description": "console.log"
  },
  "reactComponent": {
    "prefix": "rfc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    "description": "React component"
  },
  "reactStyledComponent": {
    "prefix": "rsc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "import styled from 'styled-components'",
      "",
      "const Styled${TM_FILENAME_BASE} = styled.$0``",
      "",
      "function ${TM_FILENAME_BASE}() {",
      "\treturn (",
      "\t\t<Styled${TM_FILENAME_BASE}>",
      "\t\t\t${TM_FILENAME_BASE}",
      "\t\t</Styled${TM_FILENAME_BASE}>",
      "\t)",
      "}",
      "",
      "export default ${TM_FILENAME_BASE}",
      ""
    ],
    "description": "React styled component"
  }
}
```
