class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // INSERT ITEM
  insert(item) {
    this.data[this.length] = item;
    this.length++;
  }
}
