import Stuff from "./Stuff.js";

class Cart {
  private readonly store: Map<Stuff, number>;

  constructor(public readonly name: string) {
    this.store = new Map();
  }

  addItem(name: Stuff) {
    if (this.store.has(name)) {
      const originCount = this.store.get(name);
      this.store.set(name, originCount + 1);
    } else {
      this.store.set(name, 1);
    }
  }

  removeAllItem() {
    this.store.clear();
  }

  removeItem(name: Stuff) {
    if (!this.store.has(name)) {
      return;
    }

    const originCount = this.store.get(name);
    if (originCount > 0) {
      this.store.set(name, originCount - 1);
    } else {
      this.store.delete(name);
    }
  }

  showItems() {
    this.store.forEach((v, k) => console.log(k, v));
  }
}

export default Cart;
