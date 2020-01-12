import View from "./View.js";
import Person from "./Person.js";

class ChipView extends View {
  onCreateView(): HTMLElement {
    throw new Error("Method not implemented.");
  }
  private container: HTMLElement;

  constructor(private readonly user: Person) {
    super();
    this.container = document.createElement("div");
    this.setStyle();
    this.setContent();
  }

  private setContent(): void {
    this.container.innerHTML = this.user.name;
  }

  private setStyle(): void {
    this.container.style.display = "flex";
    this.container.style.border = "1px solid black";
    this.container.style.borderRadius = "0.8";
    this.container.style.justifyContent = "center";
    this.container.style.alignContent = "center";
    this.container.style.color = "red";
  }
}

export default ChipView;
