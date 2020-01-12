import Person from "./Person.js";
import ChipView from "./ChipView.js";

class Controller {
  private views: HTMLElement[];
  private users: Person[];

  constructor() {
    this.views = [];
    for (let index = 0; index < 20; index++) {
      this.views.push(new ChipView(new Person("hi", 20)));
    }
  }

  attachView(): void {
    this.views.forEach(v => document.body.appendChild(v));
  }

  addView(view: HTMLElement) {
    this.views.push(view);
  }

  removeView(viewId: number) {
    // this.views.findIndex(v => v.id === viewId);
  }
}

export default Controller;
