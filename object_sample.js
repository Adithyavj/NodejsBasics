//Object is key value representation
var Person = { name: "Adithya Vijay K", age: 24, place: "Malappuram",display: function (){
    console.log(this.name)
}}
console.log(Person.name)
console.log(Person['age'])
console.log('-----------------------')

for(x in Person){
    console.log(x)
}

console.log('-----------------------')
for(x in Person){
    console.log(Person[x])
}
console.log('-----------------------')
console.log(Person.display())