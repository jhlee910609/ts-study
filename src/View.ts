abstract class View extends HTMLElement {
  abstract onCreateView(): HTMLElement;
}
customElements.define("sample-view", View, { extends: "div" });

export default View;
