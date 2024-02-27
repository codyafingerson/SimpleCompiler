// Path: compiler/data-structures/SymbolTable.ts

class SymbolTable<K, V> {
    private readonly keys: K[];
    private readonly values: V[];
    private size: number;

    constructor() {
        this.keys = [];
        this.values = [];
        this.size = 0;
    }

    public put(key: K, value: V): void {
        if(this.contains(key)) {
            this.values[this.keys.indexOf(key)] = value;
        } else {
            this.keys.push(key);
            this.values.push(value);
            this.size++;
        }
    }

    public get(key: K): V {
        return this.values[this.keys.indexOf(key)];
    }

    public delete(key: K): void {
        if(this.contains(key)) {
            this.values.splice(this.keys.indexOf(key), 1);
            this.keys.splice(this.keys.indexOf(key), 1);
            this.size--;
        }
    }

    public contains(key: K): boolean {
        return this.keys.includes(key);
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public getSize(): number {
        return this.size;
    }

    public getKeys(): K[] {
        return this.keys;
    }

    public getValues(): V[] {
        return this.values;
    }
}

export default SymbolTable;