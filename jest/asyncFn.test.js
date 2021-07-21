// 비동기 코드 테스트
const fn = require('./asyncFn');

// 비동기 콜백함수를 사용하기 위해서는 done 콜백함수를 사용하여 테스트 한다
test("2초후 받아온 이름은 Mike", (done)=> {
    function callback(name) {
        try {
            expect(name).toBe('Mike');
            done();
        }
        catch (e) {
            done();
        }
    }
    fn.getName(callback);
});

// 프로미스 패턴 테스트 하기 위해서는 return 해줘야 한다
test("2초후 받아온 나이는 25", async ()=> {
    // 기본
    // return fn.getAge().then((age)=> {
    //     expect(age).toBe(25);
    // })

    // matcher 를 사용하여 구현 할 수 있다. resolves, rejects
    // return expect(fn.getAge()).resolves.toBe(25);

    // async, await 적용하기
    const age = await fn.getAge();
    expect(age).toBe(25);
})