# Typescript 공부하기
## 기본 셋팅하기
### 1. Typescript란?
- javascript의 `super set`
  - javascript를 포함한 더 큰 기능(api) 제공
- 동적 프로그래밍이 다수의 개발자와의 협업 땐, 단점으로 작용
- 이를 보완하고자 만든 정적 타입의 언어

### 2. 실행환경 셋팅하기
  1. `node.js` 설치 
  2. `npm init -y`로 npm 설치
  3. [Typescript 설치하기](https://poiemaweb.com/typescript-introduction)


## 변수선언하기
### 1. `var` vs `let, const`
- 유효 범위(scope)의 차이가 있음
- `var`는 function scope, `let`과 `const`는 block scope 범위를 갖고 있음
- [스코프 비교 예제 코드](https://velog.io/@marcus/2019-02-10-1702-%EC%9E%91%EC%84%B1%EB%90%A8)
tsc


## interface
- typescript에서의 interface는 크게 두 가지 기능을 갖고 있음
  1. method(function) 강제 (자바와 기능 같음)
  2. property 강제 (굳이... 클래스 만들면 됨)


## 함수 선언
   1. 일반
  ```typescript
  function add(a: number, b: number): number {
    return a + b
  }
  ```
  2. arrow function

```typescript
const add = (a: number, b: number): number => a+b;
```


