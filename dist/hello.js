import Tv from "./Tv.js";
function outer() {
    const score = 150;
    const text = document.createElement("div");
    text.innerHTML = score + "";
    text.style.fontSize = "120px";
    text.style.color = "red";
    document.body.appendChild(text);
}
function doPracticeType() {
    let numVal = 0;
    numVal = null;
    numVal = undefined;
    let stringVal = "";
    stringVal = null;
    stringVal = undefined;
    let nameList = ["heejin", "junhee", "tk", "youngjune"];
    nameList.forEach(user => {
        const nameEle = document.createElement("div");
        nameEle.innerHTML = user;
        nameEle.style.color = "blue";
        nameEle.style.fontSize = "20px";
        document.body.appendChild(nameEle);
    });
    const samsungTv = new Tv("samsung");
    const lgTv = new Tv("lg");
    const tvs = [samsungTv, lgTv];
    tvs.forEach(tv => tv.turnOff());
}
doPracticeType();
//# sourceMappingURL=hello.js.map