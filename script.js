console.log("Hey Thalli")


//functions assigned to variables
const printName =  nameLength => console.log(`OMG my name is ${nameLength} long`);
printName(4);

//functions in objects
const Obj = {};
Obj.printName = nameL => console.log(`Omg my name is ${nameL} Long!`);
Obj.printName(5);

//functions assigned in arrays
const arr = ["1", "2", nameLength => console.log(`Omg my name is ${nameLength} Long!`)];
arr[2](6);

//how to do functional programming

//Immutability
const tanay = {
    mother: "Kalyani",
    age: 30
}

const tanvi = {...tanay, age: tanay.age - 4}
console.log(tanay)
console.log(tanvi)

const arrColor = ["red", "green", "blue", "violet", "saffron"];
const arrColor2 = [...arrColor, "Black", "orange"];
console.log(arrColor);
console.log(arrColor2);

//pure functions
const birthday = (person) => ({ ...person, age: person.age + 1});

const tanayAftBday = birthday(tanay);
console.log(tanayAftBday)

//higher order function
//can take functions as arguments

const lessThanTen = number => number < 10;
const array1 = [15, 12, 10, 12, 6, 5, 2, 1];
const array2 = array1.filter(number => lessThanTen(number));
console.log(array2)