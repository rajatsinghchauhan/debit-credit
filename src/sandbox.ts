// declaring a variable
const hello = "rajatt";
console.log(hello);

// selecting inputs
const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((input) => {
  console.log(input);
});

//writing a fuction
const myfun = (dia) => {
  return dia * Math.PI;
};

console.log(myfun(5));

// typescript provides strict types, which basically mean if a type is string on diliration then it will be string forever ..
// YOU CANT CHANGE IT TO ANYOTHER TYPE INBETWEEN

// ARRAY

const arr = ["rajat", "harshit", "nishant"];

arr.push("friends");
//you cant push nuber to arr as its delaration type is string

const num = [3, 5, 9];
num.push(11);
//you cant push any other type to it except number

const mix = [3, "rajat", 6, "singh"];
mix.push(9);
mix.push("hello");
mix[0] = "hii";
// as initial declaration has both the type so you can push both

//objects

const rajat = {
  name: "rajat",
  age: 22,
  dream: "thats a tough question bro",
};

// you cannot add a new variable to object like you cant do
// rajat.skills=[] that will give error

// tyescript is strict with what you can do after initial declaration

//EXPLICT declaration-

let about: string;
let fine: number;
let isright: boolean;
// there types are declared without intializig anything

//explicit declaration for array
let hehe: string[] = [];

//union types

let anothermix: (string | number)[] = [];
anothermix.push(3);
anothermix.push("hello");
console.log(anothermix);

let uid: string | number;
uid = "123";
uid = 123;

let objone: {};
let objtwo: {
  name: string;
  rollno: number;
  class: string;
};

objtwo = {
  name: "rajat",
  rollno: 32,
  class: "btch 1st",
};

console.log(objtwo);

// any type

let age: any;
age = 76;
age = "76";
console.log(age);
