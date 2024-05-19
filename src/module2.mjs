import abc , { b, c } from "./module1.mjs"

console.log(abc) // in default export we can export by any name irrespective of variable name 
console.log(b) // in named export we shall use the same name as the variable name we want to export
console.log(c)
// console.log(d)