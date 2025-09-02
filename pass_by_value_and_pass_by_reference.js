// Pass by value (pass by Primitive data type )
const name = "sheikh";
const myFunc = (value) => {
  value = "Rasel";
  console.log("inside func: ", value);
};

// myFunc(name);
// console.log("After func call: ", name);

// Pass by reference (pass by non primitive or referential data type )
const obj = {
  name: "Rasel",
  age: 22,
};
const myFunc2 = (param) => {
  param.name = "Rasel";
  console.log("inside func: ", param);
};

myFunc2(obj);
console.log("After func call: ", obj);
