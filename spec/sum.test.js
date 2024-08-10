import { sum } from '../src/sum.js'

describe("sum", () => {
    test(` sum of 1 and 2 returns 3`, () => {
        expect(sum(1, 2)).toBe(3);
    })
})
