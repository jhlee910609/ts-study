import { Korean } from "./main";
export class KoreanPresident implements Korean {
  constructor(public readonly jumin: number, public readonly name: string) {}
  say(msg: string): void {
    throw new Error("Method not implemented.");
  }
  loveKimchi(): void {
    throw new Error("Method not implemented.");
  }
}
