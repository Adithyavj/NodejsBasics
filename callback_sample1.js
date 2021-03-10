var hello=(data)=>{
    console.log('Data:'+data)
}
var hey=function(callback){
    callback('test') //here it calls hello
}

hey(hello)