const fn = require('./fn');

let user;

// // 테스트 실행 직전에 실행됩니다.
// beforeEach(async ()=> {
//     user = await fn.connectUserDb();
// })
//
// // 테스트 실행 직후에 실행됩니다.
// afterEach(async ()=> {
//     await fn.disconnectDb();
// })

/**
 * 데이터베이스 연결, 연결해제는 테스트 마다 진행하면 불필요한 시간낭비가 발생하므로
 * 테스트 시작전 한번, 마지막 테스트 종료후 한번 실행되게 만든다.
 */
// 전체 테스트 시작전 한번 실행됩니다.
beforeAll(async ()=> {
    console.log("바깥 beforeAll"); // 1
    user = await fn.connectUserDb();
})

// 모든 테스트 끝난후 한번 실행됩니다.
afterAll(async ()=> {
    console.log("바깥 afterAll"); // 4
    await fn.disconnectDb();
})


test("이름은 Mike", ()=> {
    expect(user.name).toBe("Mike");
})

// 비슷한 테스트 끼리 묶어서 사용
describe("Car 작업 관련", ()=> {
    let car;
    beforeAll(async ()=> {
        console.log("안 beforeAll"); // 2
        car = await fn.connectCarDb();
    })
    afterAll(async ()=> {
        console.log("안 afterAll"); // 3
        await fn.disconnectCarDb();
    })

    test("차 이름은 x5", ()=> {
        expect(car.name).toBe("x5");
    });
    test("차 색상은 blue", ()=> {
        expect(car.color).toBe("blue");
    });
    test("차 브랜드는 bmw", ()=> {
        expect(car.brand).toBe("bmw");
    });
})


// only 가 붙은 테스트 코드만 실행된다.
// 독립성으로 실행 해주게 해서 외부요인을 제외시켜준다.
test.only("이 테스트 코드만 실행됨", ()=> {
    expect(null).toBeNull();
})
// skip 이 붙은 테스트는 코드는 실행되지 않습니다.
test.skip("이 테스트는 스킵", ()=> {
    expect(0).toBe(0);
})