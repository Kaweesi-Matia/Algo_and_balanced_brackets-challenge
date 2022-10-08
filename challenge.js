/* eslint-disable no-unused-vars */
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(number) {
    const node = new Node(number, this.head);
    this.head = node;
  }

  pop() {
    if (!this.head) { return null; }
    const { value } = this.head;
    this.head = this.head.next_node;
    return value;
  }
}
function balancedBrackets(string) {
  const array = string.split('').filter((c) => '()[]{}'.includes(c));
  const stck = new Stack();
  for (let i = 0; i < array.length; i++) {
    if ('({['.includes(array[i])) { stck.push(array[i]); } else {
      if (!stck) { return false; }
      const top = stck.pop();
      if (top == '(' && array[i] != ')') { return false; }
      if (top == '{' && array[i] != '}') { return false; }
      if (top == '[' && array[i] != ']') { return false; }
    }
  }
  if (!stck.pop()) { return true; }
  return false;
}

console.log(balancedBrackets('(hello)[world]'));
// => true

console.log(balancedBrackets('([)]'));
// => false

console.log(balancedBrackets('[({}{}{})([])]'));
// => true

module.exports = balancedBrackets;
