// Take input
let master=prompt("Enter ur name:");
console.log("My name is :"+master); //web browser

console.log(`${3+3}=6`);
// download es6 extension in vs code ,then type clg, it will automatically console.log(object)
console.log("hello")
console.log(typeof(1)); 
let a="hello"
let b=3
let c=4.0
const d=5 // constant variable, cannot be changed ,immutable like strings
var e=6 // global variable, can be changed
console.log(a);
console.log(b);
console.log(c);
console.log(typeof(a)); 
// use `(backtick for doc string)
// console.log("hjlhkgjjkl
//     hjjjjjjjjjjjjjjjj"); // string interpolation
console.log(`hjlhkgjjkl
 hjjjjjjjjjjjjjjjj`);
console.log(`hello ${a}`); // string interpolation
console.log(`hello ${a} ${b}`); // string interpolation
// convert string into integer
console.log(parseInt("10kb,hjkgjvmbjhkghvj")); 
console.log(parseFloat("10.5kb,hjkgjvmbjhkghvj")); // 10
// int+string=string
console.log('object'+10);
let username="hello"
let password="1234"

// u can make a block, which is set for that area only
{
    let user={
        username:username,
        password:password}
    console.log(user);
}
// alert("hello shrinidhi ")
console.warn("i am don") // warning
console.error("i am error") // error
console.log("hello shrinidhi")
console.table({"name":"james","age":20})


let an=10
a=20
console.log(a); // 20

const annnn =10
a=20
console.log(a); // 20

let counter=0
counter++ // increment counter by 1
counter++ // increment counter by 1
counter++ // increment counter by 1
counter++ // increment counter by 1
counter++ // increment counter by 1
counter++ // increment counter by 1
counter++ // increment counter by 1
counter++ // increment counter by 1
counter++ // increment counter by 1
console.log(counter);

// NaN=not a number
// undefined=not defined
// null=empty value
// 0 =zero, -0 =negative zero, +0=positive zero
// false=boolean false, true=boolean true

// all above are falsy values keywords

// anything+undefined=undefined/NaN

console.log(10==="10"); // false, === is strict equality operator, checks value and type
console.log(10=="10"); // true, == is loose equality operator, checks only value
console.log(10!=="10"); // true, !== is strict inequality operator, checks value and type

let first = "hello";
let second = "hi";

// ✅ Correct way to concatenate strings
let mix = first.concat(second);
console.log(mix); // Output: hello hi

// ✅ Append string using +=
first += "hiiioj";
console.log(first); // Output: hellohiiioj

// ✅ String length
console.log(first.length); // Output: length of the string

// ✅ Lowercase
console.log(first.toLowerCase());

// ✅ Uppercase
console.log(first.toUpperCase());

// ✅ Slice (0 to 5)
console.log(first.slice(0, 5)); // Output: hello

// ❌ `reverse()` does not exist for strings directly — convert to array first
console.log(first.split("").reverse().join("")); // Reverse the string
console.log(first.includes("foriegn"));
// ✅ Loop from i = 20 to 399
let i = 20;
do {
    console.log("Shrinidhi");
    i++;
} while (i < 400);

let first1=["rama","shama","bhama","mama" ]
let first2=first1.join("-")
console.log(first2);
console.log(first2.split("-"));
console.log(first1.includes("rama"));

let docstrings= `hvbjhugfghcvbjhugjf
vnbmmjhbbcbmbmnbbkkbascjns
                            om namah shivaya, tat vastade , `
console.log(docstrings);
// f-strings
let variable1="Good"
let variable2="Morning"
let variable3="143"
console.log(`${variable1} ${variable2}`+" "+"madam"+" "+`${variable3}`);
// String to integer Type conversion
console.log(parseInt(variable1)+" "+parseInt(variable3));   
variable3+=variable3
console.log(variable3);
console.log(Number(variable3));
//int to string 
let variable4=500
let variable5=String(variable4)
console.log(variable5);
console.log(typeof(variable5));
console.log(variable4.toString());

const ant = [1, 6, 5, 345, 5, 4, 6, 78];
console.log(ant.sort((a, b) => a - b));  // Ascending numeric sort
console.log(ant.sort((a, b) => b - a));  // Descending numeric sort

let vai={
    good:"morning",
    bad:"evening", 
    10:"ten",
    location:["planet","earth"]
};
vai.HELLO="sweet";
vai.beauty="kriti sanon"

// console.log(object);
console.log(vai);
delete vai.beauty
console.log(vai);
console.log(Object.keys(vai).length);
console.log(vai.bad);
console.log(vai[10]);
let arr=[1,2,3,4];
console.log(arr.length);
console.log(typeof(arr));

let car={
    type:"HE",
    model:"kuv 100",
    colour:"pink"
}
console.log(car);
console.log(typeof(car));
car.type="Toyato"
console.log(car);
car.wheels="black"
console.log(car);

function greet(num,name){
    console.log("Nanna jeevake",num);
    console.log(`One and only star ,super star ${name}`);
}
greet(10,"Vijay Joseph")

{
    function myFunction(num1, num2) {
        console.log(num1 * num2);
        return num1 * num2; // Added return statement to make the function meaningful
    }

    let b = myFunction(30, 40);
    let c = myFunction(50, 60);
}


