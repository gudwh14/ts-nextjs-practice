/*
    Typescript 로 Jest 테스트 진행시 jest 실행 타임이 엄청 오래 걸린다....
    이유는 아직 모르겠음, 아마 config 문제 일거 같은데
    해결을 못해서 그냥 javascript 로 변환해서 진행한다.
 */
const fn = {
    addNumber: (num1, num2) => num1 + num2,
    makeUser : (name, age) => ({name,age, gender : undefined}),
    throwErr : () => {throw new Error('Error 발생')},
    connectUserDb : () => {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve({
                    name : "Mike",
                    age : 25,
                    gender : 'male'
                });
            },500)
        });
    },
    disconnectDb : () => {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve();
            },500);
        });
    },
    connectCarDb : () => {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve({
                    brand : "bmw",
                    name : 'x5',
                    color : 'blue'
                });
            },500)
        });
    },
    disconnectCarDb : () => {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve();
            },500);
        });
    },
}

module .exports = fn;