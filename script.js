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