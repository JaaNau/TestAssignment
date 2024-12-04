// node 12 and up
//import chai from "chai"
//import add from "../add.js"

// below for node 10
var chai = require("chai")
var add = require ("../add.js")


const expect = chai.expect


describe("Add", () => {
 it("sum of positive (3) with positive (6), expecting positive (9)", () =>{
     expect(add(3,6)).to.equal(9)
 });
})