var add = require ("../add.js")


describe("Add", () => {
 it("sum of positive (3) with positive (6), expecting positive (9)", () =>{
     expect(add(3,6)).to.equal(9)
 });
})