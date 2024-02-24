import TokenType from "./TokenType.ts";

class Token {
    private readonly start: number;
    private readonly end: number;
    private readonly value: string;
    private readonly type: TokenType;

    constructor(start: number, end: number, value: string, type: TokenType) {
        this.start = start;
        this.end = end;
        this.value = value;
        this.type = type;
    }

    public getStart(): number {
        return this.start;
    }

    public getEnd(): number {
        return this.end;
    }

    public getValue(): string {
        return this.value;
    }

    public getType(): TokenType {
        return this.type;
    }

    public toString(): string {
        return this.type + " " + this.value;
    }

    public equals(other: Token): boolean {
        return this.start === other.start && this.end === other.end && this.value === other.value && this.type === other.type;
    }

    public isType(type: TokenType): boolean {
        return this.type === type;
    }

    public isValue(value: string): boolean {
        return this.value === value;
    }
}

export default Token;