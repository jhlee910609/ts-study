import Cart from "./Cart.js";
import Stuff from "./Stuff.js";
import { KoreanPresident } from "./KoreanPresident.1";

enum StarbucksGrade {
  WELECOME = "WELECOME",
  GREEN = "GREEN",
  GOLD = "GOLD"
}

interface Person {
  name: string;
  say(msg: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

export abstract class Korean implements Person {
  public abstract jumin: number;

  constructor(public name: string) {}

  say(msg: string): void {
    throw new Error("Method not implemented.");
  }

  abstract loveKimchi(): void;
}

function createPromise<T>(x: T, timeout: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout * 1000);
  });
}

createPromise<Cart>(new Cart("myCart"), 3).then(cart => console.log(cart.name));

class LocalDB<T> {
  constructor(private localStorageKey: string) {}
  add(v: T) {}

  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

interface User {
  name: string;
}

const userDB = new LocalDB<User>("user");
userDB.add({ name: "jay" });
const userA = userDB.get();
userA.name;

interface User {
  name: string;
}

interface Action {
  do(): void;
}

// 두 객체 합친 것 return
function createUserAction(u: User, a: Action): User & Action {
  return { ...u, ...a };
}

const a = createUserAction({ name: "junhee" }, { do() {} });
console.log(a);

//
function compare(x: string, y: string): any;
function compare(x: number, y: number): any;
function compare(x: string | number, y: string | number): number {
  if (typeof x === "number" && typeof y === "number") {
    return x === y ? 1 : 0;
  }

  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
  throw Error("not supported type");
}

// type guard 만들기
function isAction(v: User | Action): v is Action {
  return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
  if (isAction(v)) {
    v.do()
  } else{
    v.name
  }
}
