import Person from "./Person.js";
import ChipView from "./ChipView.js";
class Controller {
    constructor() {
        this.views = [];
        for (let index = 0; index < 20; index++) {
            this.views.push(new ChipView(new Person("hi", 20)));
        }
    }
    attachView() {
        this.views.forEach(v => document.body.appendChild(v));
    }
    addView(view) {
        this.views.push(view);
    }
    removeView(viewId) {
    }
}
export default Controller;
//# sourceMappingURL=Controller.js.map