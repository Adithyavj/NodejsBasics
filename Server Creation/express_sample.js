const express = require("express")
const path = require('path')
const app = express()

//Middleware when request is going to server this works
app.use(function(req,res,next){
    console.log('Start')
    next() //to go to next requests otherwise it will stop here. other routs won't work
           //callback
})

app.get('/signup',function(req,res,next){
    res.sendFile(path.join(__dirname.replace('Server Creation',''),'signup.html'))
    console.log('Middle')
    next()
})
app.post('/signup',function(req,res){
    res.send('Account created!')
})
app.get('/about',(req,res)=> res.send('about'))

//After we get response this works
app.use(function(req,res){
    console.log('End')
})

app.listen(3000,()=>{
    //console.log(__filename)
    //console.log(__dirname)
    console.log('server started')
})