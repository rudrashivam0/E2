import { Sum } from '../Sum'

test("Sum function should calcutate the sum of two numbers", () => {

    const result = Sum(2, 3);

    //?ASSETCTION 
    expect(result).toBe(5);
})