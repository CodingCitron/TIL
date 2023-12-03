[nestjs official](https://docs.nestjs.com/)
[nestjs로 배우는 백엔드 프로그래밍](https://wikidocs.net/148194)

### tsconfig.build란

- tsconfig.json의 연장선상 파일이며, build를 할 때 필요한 설정들 "excludes"에서는 빌드할 때 필요없는 파일들 명시

### Providers란

프로바이더는 Nest의 기본 개념입니다. 대부분의 기본 Nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼등 프로바이더로 취급될 수 있습니다.
프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것입니다. 즉, 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 "연결"하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있습니다.

### Service란

- 서비스는 소프트웨어 개발내의 공통 개념이며, NestJS, Javascript에서만 쓰이는 개념이 아닙니다.
- @Injectable 데코레이터로 감사져서 모듈에 제공되며, 이 서비스 인스턴스는 애플리케이션 전체에서 사용 될 수 있다.
- 서비스는 컨트롤러에서 데이터의 유효성 체크를 하거나 데이터베이스에 아이템을 생성하는 등의 작업을 하는 부분을 처리합니다.
- 서비스를 사용하기 위해서는 종속성 주입(Dependency Injection)을 해야함

### Pipe란

- 파이프는 @Injectable 데코레이터로 주석이 달린 클래스
- 파이프는 data transformation과 data validation을 위해서 사용
- 파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동
- Nest는 메소드가 호출되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동

#### Data Transformation

- 입력 데이터를 원하는 형식으로 변환 (예: 문자열에서 정수로)
- 만약 숫자를 받길 원하는데 문자열 형식으로 온다면 파이프에서 자동으로 숫자로 바꿔줍니다.
  String to Integer EX) string '7' => Integer 7

#### Data Validation

- 입력 데이터를 평가하고 유효한 경우 변경하지 않은 상태로 전달하면 됩니다. 그렇지 않으면 데이터가 올바르지 않을 때 예외를 발생시킵니다.
  마약 이름의 길이가 10자 이하여야 하는데 10자 이상 되면 에러를 발생시킵니다.

파이프는 위에 두가지 모든 경우에서
라우트 핸들러가 처리하는 인수에 대해서 작동합니다.
그리고 파이프는 메소드를 바로 직전에 작동해서 메소드로 향하는 인수에 대해서 변환할 것이 있으면 변환하고 유효성 체크를 위해서도 호출

### Pipe 사용하는 법 (Binding Pipes)

파이프를 사용하는 방법은(Biding piopes)는 세가지로 나눠질 수 있습니다.
Handler-level Pipes, Parameter-level Pipes, Global-level Pipes입니다.
이름에서 말하는 것 그대로 핸들러 레벨, 파라미터 레벨, 글로벌 레벨로 파이프를 사용할 수 있습니다.

### Handle-level Pipes

핸들러 레벨에서 @UsePipes() 데코레이터를 이용해서 사용할 수 있다.
이 파이프는 모든 파라미터에 적용

### Prameter-level Pipes

파라미터 레벨의 파이프이기에 특정한 파라미터에게만 적용이 되는 파이프입니다.

```javascript
@Post()
createBoard(
    @Body('title', ParameterPipe) title, // 타이틀만 적용
    @Body('description') description
) {

}
```

### Global Pipes

글로벌 파이프로서 애플리케이션 레벨의 파이프입니다.
클라이언테어 들어오는 모든 요청에 적용이 됩니다.
가장 상단 영역인 main.ts에 넣어주시면 됩니다.

```javascript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(GlobalPipes); // 이런식으로 사용
  await app.listen(3000);
}

bootstrap();
```

### Built-in Pipes

Nest JS에 기본적으로 사용할 수 있게 만들어 놓은 6가지의 파이프가 있습니다.

- Validation Pipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe

### Class-Validator

- https://github.com/typestack/class-validator#manual-validation

### Class-Transformer

### TypeORM

TypeORM은 node.js에서 실행되고 TypeScript로 작성된 객체 관계형 매퍼 라이브러리입니다.
TypeORM은 MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana 및 WebSQL과 같은 여러 데이터베이스 지원

```shell
npm install pg typeorm @nestjs/typeorm --save
```

https://docs.nestjs.com/techniques/database

## ORM이란

객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결하는 작업
ORM을 이용한 개발은 객체와 데이터베이스의 변형에 유연하게 사용할 수 있습니다.

## nest 모듈, 컨트롤러, 서비스 생성 명령어

```shell
# auth 모듈 생성
nest g module auth

# auth 컨트롤러
nest g controller auth --no-spec

# auth 서비스
nest g service auth --no-spec
```

[config](https://docs.nestjs.com/techniques/configuration)

[refresh token](https://soonyubi.github.io/jwt-refresh-token/)

