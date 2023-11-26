# @types 폴더를 생성하는 이유

- 프로젝트를 진행하면서 파일들의 내부에 커스텀 타입 정의가 중구난방으로 생겨난다. 이를 잘 관리하기 위해서 하나의 폴더 @types 폴더를 만들어서 관리
- @types 폴더를 만들었으면 해당 파일을 인식할 수 있도록 tsconfig.json 파일을 수정해 주어야 한다.

## 타입 관리

- [참조](https://leo-xee.github.io/TypeScript/manage-types/)
- [module, import, export, declare 개념 정리](https://it-eldorado.tistory.com/127)
- [declare 사용](https://velog.io/@yhko1992/declare)
- [프로젝트에서 타입 관리하기](https://leo-xee.github.io/TypeScript/manage-types/)
- [공식문서?](https://www.typescriptlang.org/ko/docs/handbook/modules.html)

```typescript
// @types/index.d.ts
export * as ReactChildren from "@prTypes/react";

declare module "project-types" {
  ReactChildren;
}
```

```typescript
declare module "<types>" {
  export * as ReactChildren from "./react";
}
```

```typescript
export * from "./react";
export * from "./component";
```

위처럼 사용하기 위해서 tsconfig도 수정

```json
{
    "compilerOptions": {
        .
        .
        .
        "typeRoots": ["./node_modules/@types", "./@types"]
    },
    "include": ["src", "@types"],
}
```
