import TokenType from "./TokenType.ts";

/**
 * A token represents a single element in the input string.
 */
class Token {
    private readonly start: number;
    private readonly end: number;
    private readonly value: string;
    private readonly type: TokenType;

    /**
     * Create a new token with the given start and end indices, value, and type.
     * @param start The start index of the token.
     * @param end The end index of the token.
     * @param value The value of the token.
     * @param type The type of the token.
     */
    constructor(start: number, end: number, value: string, type: TokenType) {
        this.start = start;
        this.end = end;
        this.value = value;
        this.type = type;
    }

    /**
     * Get the start index of the token.
     */
    public getStart(): number {
        return this.start;
    }

    /**
     * Get the end index of the token.
     */
    public getEnd(): number {
        return this.end;
    }

    /**
     * Get the value of the token.
     */
    public getValue(): string {
        return this.value;
    }

    /**
     * Get the type of the token.
     */
    public getType(): TokenType {
        return this.type;
    }

    /**
     * Get the token as a string.
     */
    public toString(): string {
        return this.type + " " + this.value;
    }

    /**
     * Check if this token is equal to another token.
     * @param other The token to compare to.
     */
    public equals(other: Token): boolean {
        return this.start === other.start && this.end === other.end && this.value === other.value && this.type === other.type;
    }

    /**
     * Check if this token is of the given type.
     * @param type The type to check for.
     */
    public isType(type: TokenType): boolean {
        return this.type === type;
    }

    /**
     * Check if this token is of the given value.
     * @param value The value to check for.
     */
    public isValue(value: string): boolean {
        return this.value === value;
    }
}

export default Token;