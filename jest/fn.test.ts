const testFn = require("./fn");
// @ts-ignore
test('2+3은 5이다',()=>{
    expect(testFn.addNumber(2,3)).toBe(5);
})

test('10+2은 10이 아니다',()=>{
    expect(testFn.addNumber(10,2)).not.toBe(10);
})
