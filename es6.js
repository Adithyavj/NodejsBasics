//ECMAScript
var num=10
var num=20

console.log(num)
let hello=20
// let hello=10
console.log(hello)

//let advantages
//1.once it is declared it cannot be declared again within the same block
//2.scope of let is within the block(within brace)

//const advantages
const i=100
// i=200
console.log(i)

const arr=['Adi','Arju']
arr.push('New member')
console.log(arr)


//Default argument for a function
let num1=10
let num2=100
function fun1(num1=0,num2){
    console.log("Sum is :",num1+num2)
}

fun1(num1,num2)
fun1(undefined,num2)