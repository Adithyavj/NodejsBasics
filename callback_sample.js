
//let us find the time required to run this process
// var dt=new Date() //current date

// console.log('Hello')
// for(var i=0;i<100;i++)
// {
//     console.log('Loop')
// }
// console.log('end')

// var diff=new Date()-dt
// console.log(diff)

//Synchronous concept....
console.log('started')
longTask(2000)
console.log('end')

console.log('started')
longTask(2000)
console.log('end')

console.log('started')
longTask(2000)
console.log('end')


function longTask(milliSecondTime){
    var dt=new Date() //current date
    while((new Date()-dt)<= milliSecondTime){

    }
}