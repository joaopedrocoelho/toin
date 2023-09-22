export class CircularNode {
  public value: number;
  public left: CircularNode | null;
  public right: CircularNode | null;

  public constructor(
    value: number,
    right: CircularNode | null,
    left: CircularNode | null
  ) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

export class CircularLinkedList {
  length: number;
  head: CircularNode | null;
  public constructor() {
    this.length = 0;
    this.head = null;
  }

  add(value: number) {
    const newNode = new CircularNode(value, null, null);
    if (this.head === null) {
      this.head = newNode;
      newNode.right = this.head;
      newNode.left = this.head;
    } else {
      let pointer: CircularNode | null = this.head;
      while (pointer!.right !== this.head) {
        pointer = pointer!.right;
      }
      pointer!.right = newNode;
      this.head.left = newNode;
      newNode.right = this.head;
      newNode.left = pointer;
    }
  }

  public static fromArray(arr: number[]) {
    const list = new CircularLinkedList();
    for (let i = 0; i < arr.length; i++) {
      list.add(arr[i]);
    }
    return list;
  }

  toArray() {
    const arr: number[] = [];
    let pointer: CircularNode | null = this.head;
    while (pointer!.right !== this.head) {
      arr.push(pointer!.value);
      pointer = pointer!.right;
    }
    arr.push(pointer!.value);
    return arr;
  }

  print() {
    let pointer: CircularNode | null = this.head;
    while (pointer!.right !== this.head) {
      console.log(pointer!.value);
      pointer = pointer!.right;
    }
    console.log(pointer!.value);
  }
}
