
const asyncFn = {
    // 2초뒤 callback 함수로 name 을 넘겨준다
    getName : (callback)=> {
        const name = 'Mike';
        setTimeout(()=> {
            // throw new Error("에러 발생!");
            callback(name);
        }, 2000);
    },
    getAge : () => {
        const age = 25;
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(age);
            },2000);
        });
    },
}

module.exports = asyncFn;