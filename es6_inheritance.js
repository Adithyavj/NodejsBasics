class Sample{
    samplehello(){
        console.log("Called Sample Hello")
    }
}

class hello extends Sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }

    hello(){
        console.log("Hello World, sum is: "+(this.num1+this.num2+this.num3))
    }
}

let s=new hello(10,20)
s.hello()
s.samplehello()

