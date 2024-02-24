class List<T> {
    private items: T[];

    constructor() {
        this.items = new Array<T>();
    }

    get length(): number {
        return this.items.length;
    }

    public add(item: T) {
        this.items.push(item);
    }

    public remove(item: T) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    public get(index: number): T {
        return this.items[index];
    }

    public contains(item: T): boolean {
        return this.items.indexOf(item) > -1;
    }

    public clear() {
        this.items.length = 0;
        this.items = new Array<T>();
    }

    public toArray(): T[] {
        return this.items;
    }
}

export default List;