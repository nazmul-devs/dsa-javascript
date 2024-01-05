class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // INSERT ITEM
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  // GET ITEM
  get(index) {
    return this.data[index];
  }

  // REMOVE LAST ITEM
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  // REMOVE ITEM
  remove(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.index - 1];
    this.length--;
  }
}

const array = new MyArray();

array.push(122);
array.push(244);
array.push(254);
array.remove(1);
console.log(array);
