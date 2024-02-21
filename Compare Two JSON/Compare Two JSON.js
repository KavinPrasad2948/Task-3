let obj1 = {name:"PERSON1",age:5};
let obj2 = {age:5,name:"PERSON1"};

if (JSON.stringify(Object.keys(obj1).sort()) === JSON.stringify(Object.keys(obj2).sort())) {
  console.log("The objects have the same properties");
} else {
  console.log("The objects do not have the same properties");
}
