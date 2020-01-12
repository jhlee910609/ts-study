import Cart from "./Cart.js";
var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade["WELECOME"] = "WELECOME";
    StarbucksGrade["GREEN"] = "GREEN";
    StarbucksGrade["GOLD"] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
export class Korean {
    constructor(name) {
        this.name = name;
    }
    say(msg) {
        throw new Error("Method not implemented.");
    }
}
function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout * 1000);
    });
}
createPromise(new Cart("myCart"), 3).then(cart => console.log(cart.name));
class LocalDB {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) { }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return v ? JSON.parse(v) : null;
    }
}
const userDB = new LocalDB("user");
userDB.add({ name: "jay" });
const userA = userDB.get();
userA.name;
function createUserAction(u, a) {
    return Object.assign(Object.assign({}, u), a);
}
const a = createUserAction({ name: "junhee" }, { do() { } });
console.log(a);
function compare(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x === y ? 1 : 0;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x.localeCompare(y);
    }
    throw Error("not supported type");
}
compare(`x`, 1);
//# sourceMappingURL=main.js.map