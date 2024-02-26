class StackNode<E> {
    value: E;
    next: StackNode<E> | null;

    constructor(value: E) {
        this.value = value;
        this.next = null;
    }
}

class Stack<T> {
    head: StackNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    public push(value: T): void {
        const newNode = new StackNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    public pop(): T | null {
        if (!this.head) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    public peek(): T | null {
        return this.head ? this.head.value : null;
    }
}

export default Stack;