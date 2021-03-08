//Object constructor to create a model for the object
function Person(name, age, place) {
  this.name = name;
  this.age = age;
  this.place = place;
  this.display = function () {
    console.log("Name: " + this.name + ", Age: " + this.age);
  };
}

var adi = new Person("Adithya", 24, "Melattur");
var arjun = new Person("Arjun", 24, "Pattikkad");

adi.display()
arjun.display()
