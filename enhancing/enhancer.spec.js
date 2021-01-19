const enhancer = require('./enhancer.js');
// test away!
//npx jest to start
//npm run test:watch

test("runs our first test", () => {
    expect(1 + 1).toBe(2)
})

test("adds numbers together", () => {
    expect(enhancer.sum(2,2)).toBe(4)
    expect(enhancer.sum(3,2)).toBe(5)
    expect(enhancer.sum(100,2)).toBe(102)
})


    
test("repair", () => {
    expect(enhancer.repair(200,2)).toBe(100)
})

