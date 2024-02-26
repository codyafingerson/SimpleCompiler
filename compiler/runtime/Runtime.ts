import LinkedList from "../data-structures/LinkedList.ts";

class Runtime {
    private scopes: LinkedList<Map<string, object | null>> = new LinkedList<Map<string, object | null>>();

    private globalScope: Map<string, object | null> = new Map<string, object | null>();

    constructor() {
        this.scopes.add(this.globalScope);
    }

    public getValue(name: string): object | null {
        for (let scope = this.scopes.head; scope; scope = scope.next) {
            if (scope.value.has(name)) {
                const value = scope.value.get(name);
                return value !== undefined ? value : null;
            }
        }
        return null;
    }

    public setValue(name: string, value: object | null): void {
        for (let scope = this.scopes.head; scope; scope = scope.next) {
            if (scope.value.has(name)) {
                scope.value.set(name, value);
                return;
            }
        }
        this.globalScope.set(name, value);
    }

    public declareVariable(name: string, value: object | null): void {
        if (this.scopes.head) {
            if (this.scopes.head.value.has(name)) {
                throw new Error(`Variable "${name}" already declared in this scope`);
            }
            this.scopes.head.value.set(name, value);
        }
    }

    public createScope(): void {
        this.scopes.add(new Map<string, object | null>());
    }

    public removeScope(): void {
        if (this.scopes.size > 1) {
            const firstScope = this.scopes.getFirst();
            if (firstScope !== null) {
                this.scopes.remove(firstScope);
            }
        } else {
            throw new Error("Cannot remove global scope");
        }
    }

    public getGlobalScope(): Map<string, object | null> {
        return this.globalScope;
    }
}

export default Runtime;