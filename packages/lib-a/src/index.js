export function adder(x: number, y: number): number {
    return x + y
}

export function is(): { test: boolean } {
    const x: ?number = 5;
    if (x) { }
    return { test: true }
}
