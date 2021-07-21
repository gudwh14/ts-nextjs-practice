

// @ts-ignore
const fn = {
    addNumber: (num1: number, num2: number): number => num1 + num2,
    makeUser : (name : string, age : number) => ({name,age, gender : undefined}),
    throwErr : () => {throw new Error('Error 발생')}
}

module .exports = fn;