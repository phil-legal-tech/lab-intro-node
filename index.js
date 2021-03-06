class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }
  add(item) {
    this.items.push(item);
    this.items.sort(
      function (a, b) {
        return a - b
      }
    );
    this.length = this.items.length
  }

  get(pos) {
    if (this.items.length >= pos) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  };

  max() {
    if (this.items.length > 0) {
      let highest = this.items[this.items.length - 1];
      return highest;
    } else if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return this.items[0];
    } else if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
  }
  
  sum() {
    let sum = 0;
    if (this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i];
      } return sum;
    } else if (this.items.length === 0) {
      return 0;
    }
  }

  avg() { 
    if (this.items.length > 0) {
      return this.sum() / this.items.length;
    } else if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
