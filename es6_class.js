class hello{
    constructor(num1,num2,num3){
        this.num1=num1
        this.num2=num2
        this.num3=num3
    }

    hello(){
        console.log("Hello World, sum is: "+(this.num1+this.num2+this.num3))
    }
}

let s=new hello(10,20,30)
s.hello()