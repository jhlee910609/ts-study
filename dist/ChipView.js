import View from "./View.js";
class ChipView extends View {
    constructor(user) {
        super();
        this.user = user;
        this.container = document.createElement("div");
        this.setStyle();
        this.setContent();
    }
    onCreateView() {
        throw new Error("Method not implemented.");
    }
    setContent() {
        this.container.innerHTML = this.user.name;
    }
    setStyle() {
        this.container.style.display = "flex";
        this.container.style.border = "1px solid black";
        this.container.style.borderRadius = "0.8";
        this.container.style.justifyContent = "center";
        this.container.style.alignContent = "center";
        this.container.style.color = "red";
    }
}
export default ChipView;
//# sourceMappingURL=ChipView.js.map