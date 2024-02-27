// Path: compiler/data-structures/List.ts

/**
 * A generic List class in TypeScript.
 * @template T The type of elements in the list.
 */
class List<T> {
    private items: T[];

    /**
     * Constructs a new List instance.
     */
    constructor() {
        this.items = new Array<T>();
    }

    /**
     * Gets the number of elements in the list.
     * @returns {number} The number of elements in the list.
     */
    get length(): number {
        return this.items.length;
    }

    /**
     * Adds an item to the list.
     * @param {T} item The item to add.
     */
    public add(item: T) {
        this.items.push(item);
    }

    /**
     * Removes an item from the list.
     * @param {T} item The item to remove.
     */
    public remove(item: T) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    /**
     * Gets the item at the specified index.
     * @param {number} index The index of the item.
     * @returns {T} The item at the specified index.
     */
    public get(index: number): T {
        return this.items[index];
    }

    /**
     * Checks if the list contains the specified item.
     * @param {T} item The item to check.
     * @returns {boolean} True if the list contains the item, false otherwise.
     */
    public contains(item: T): boolean {
        return this.items.indexOf(item) > -1;
    }

    /**
     * Clears all items from the list.
     */
    public clear() {
        this.items.length = 0;
        this.items = new Array<T>();
    }

    /**
     * Converts the list to an array.
     * @returns {T[]} An array containing all items in the list.
     */
    public toArray(): T[] {
        return this.items as T[];
    }
}

export default List;