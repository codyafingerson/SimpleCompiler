// Path: compiler/data-structures/LinkedList.ts

// Define a class for the node in the linked list
class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// Define the LinkedList class
class LinkedList<T> {
    head: ListNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    public add(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    public remove(value: T): void {
        let current = this.head;
        let prev = null;
        while (current !== null) {
            if (current.value === value) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    public getFirst(): T | null {
        return this.head ? this.head.value : null;
    }

    public getLast(): T | null {
        let current = this.head;
        while (current !== null && current.next !== null) {
            current = current.next;
        }
        return current ? current.value : null;
    }

    public getIndexOf(value: T): number {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    public insertAt(index: number, value: T): void {
        if (index < 0 || index > this.size) {
            return;
        }
        const newNode = new ListNode(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let prev = null;
            for (let i = 0; i < index; i++) {
                if (current === null) {
                    throw new Error("Index out of bounds");
                }
                prev = current;
                current = current.next;
            }
            if (prev === null || current === null) {
                throw new Error("Index out of bounds");
            }
            newNode.next = current;
            prev.next = newNode;
        }
        this.size++;
    }

    public get(index: number): T | null {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current === null) {
                throw new Error("Index out of bounds");
            }
            current = current.next;
        }
        return current ? current.value : null;
    }
}

export default LinkedList;