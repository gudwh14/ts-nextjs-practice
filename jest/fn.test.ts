const testFn = require("./fn");
// @ts-ignore
test('2+3은 5이다',()=>{
    expect(testFn.addNumber(2,3)).toBe(5);
})

test('10+2은 10이 아니다',()=>{
    expect(testFn.addNumber(10,2)).not.toBe(10);
})

test('2+3은 5이다',()=>{
    expect(testFn.addNumber(2,3)).toEqual(5);
})

// 객채,배열은 toEqual 를 이용해서 비교해야 한다.
test('이름과 나이를 전달받아서 객채로 반환해주기', ()=>{
    expect(testFn.makeUser("jjo",25)).toEqual({name : "jjo", "age" : 25})
})

// 깊은 비교를 위해서는 toStrictEqual 를 사용해야 한다.
// test('이름과 나이를 전달받아서 객채로 반환해주기', ()=>{
//     expect(testFn.makeUser("jjo",25)).toStrictEqual({name : "jjo", "age" : 25})
// })

// toBeNull
// toBeUndefined
// toBeDefined
test("null 이다", ()=> {
    expect(null).toBeNull()
})

// toBeTruthy
// toBeFalsy
test("0은 False 입니다",()=> {
    expect(0).toBeFalsy()
})

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan
// toBeLessThanOrEqual 작거나 같다

test("ID는 10자 아하여야 합니다.", ()=> {
    const id = "USER_ID";
    expect(id.length).toBeLessThanOrEqual(10);
})

// 소수점 계산은 근사치로 판단
test("0.1 더하기 0.2 는 0.3 입니다",()=>{
    expect(testFn.addNumber(0.1,0.2)).toBeCloseTo(0.3)
})

// 정규표현식을 사용해서 문자열 찾기
test("Hello World 에 H 라는 글자가 있나?",()=> {
    expect("Hello World").toMatch(/H/i);
})

// 배열에서 요소 찾기
test("유저리스트에 jjo 가 있나?",()=> {
    expect(['mike','tom','jjo']).toContain('jjo');
})

test("에러 발생?", ()=> {
    expect(()=>testFn.throwErr()).toThrow();
})