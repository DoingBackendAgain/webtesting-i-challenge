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
   const data = {durability: 80}
   const res = enhancer.repair(data)
   expect(res).toEqual({ durability : 100})
   expect(data).toEqual({ durability : 80})
})

test("success", () => {
    const res = enhancer.success({ enhancement: 1})
    expect(res).toEqual({enhancement: 2})
})

test("success", () => {
    const data = { enhancement: 1}
    const res = enhancer.success(data)
    expect(res).toEqual({enhancement: 2})
    expect(data).toEqual({enhancement:1})
})

test("fail", ()=> {
    const data = { enhancement: 14, durability: 10}
    const res = enhancer.fail(data)
    expect(res).toEqual({durability: 5, enhancement: 14})
    expect(data).toEqual({durability: 10, enhancement: 14})
})



