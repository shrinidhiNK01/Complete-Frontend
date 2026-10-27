// =============================================================================
//                           JAVASCRIPT MASTER DOCUMENTATION
// =============================================================================
// Chapter 1 : Basics, Variables, Console, Strings & Type Conversion
// =============================================================================



// =============================================================================
//                           USER INPUT
// =============================================================================

// Take input
let master = prompt("Enter ur name:");
console.log("My name is :" + master); // web browser



// =============================================================================
//                       TEMPLATE LITERALS (ES6)
// =============================================================================

console.log(`${3 + 3}=6`);



// download es6 extension in vs code ,then type clg,
// it will automatically console.log(object)
console.log("hello");




// =============================================================================
//                              VARIABLES
// =============================================================================

// Js has a feature of changing the type of variable in runtime, it is called dynamically typed language. It means that a variable can hold any type of data, and the type can change at runtime. For example, a variable can be assigned a number, and later it can be assigned a string or an object. This flexibility allows developers to write code without worrying about strict type constraints, but it also requires careful handling to avoid unexpected behavior.eg": JavaScript, Python, Ruby, PHP, and Perl are examples of dynamically typed languages. In these languages, a variable can hold any type of data, and the type can change at runtime. This flexibility allows developers to write code without worrying about strict type constraints, but it also requires careful handling to avoid unexpected behavior.

// But static typed language means that a variable can only hold a specific type of data, and the type is determined at compile time. In static typed languages, you must declare the type of a variable when you create it, and it cannot change later. This provides more safety and helps catch errors early in the development process, but it can also be less flexible than dynamically typed languages.eg": C, C++, Java, C#, Swift, Kotlin, Rust, TypeScript, Go, Scala, Haskell, and Dart are examples of statically typed languages. In these languages, you must declare the type of a variable when you create it, and the type cannot change later. This provides more safety and helps catch errors early in the development process.


// (literal = prostate value like string, number, boolean, null, undefined, symbol, bigint, object, array, function, etc.)
let a = "hello";
let b = 3;
let c = 4.0;

const d = 5;      // constant variable, cannot be changed ,immutable like strings

var e = 6;        // global variable, can be changed

console.log(a);
a=10
console.log(a);

console.log(b);
console.log(c);

console.log(typeof (a));

// Rules for writing variable names in JavaScript:
// 1. Variable names can contain letters, digits, underscores, and dollar signs.
// 2. Variable names must begin with a letter, underscore, or dollar sign.
// 3. Variable names are case-sensitive (e.g., myVar and myvar are different variables).
// 4. Reserved words (like JavaScript keywords) cannot be used as variable names.

// let = block scope variable, can be changed, but cannot be redeclared in the same scope
// const = block scope variable, cannot be changed, cannot be redeclared in the same scope
// var = function scope variable, can be changed, can be redeclared in the same scope


// =============================================================================
//                        TEMPLATE LITERALS / BACKTICKS
// =============================================================================

// use `(backtick for doc string)

// console.log("hjlhkgjjkl
//     hjjjjjjjjjjjjjjjj"); // string interpolation

console.log(`hjlhkgjjkl
 hjjjjjjjjjjjjjjjj`);

console.log(`hello ${a}`);       // string interpolation
console.log(`hello ${a} ${b}`);  // string interpolation



// =============================================================================
//                          TYPE CONVERSION
// =============================================================================

// convert string into integer

console.log(parseInt("10kb,hjkgjvmbjhkghvj"));

console.log(parseFloat("10.5kb,hjkgjvmbjhkghvj")); // 10

let input =prompt("Enter a number:"); // take input from user
input=Number.parseInt(input); // convert string into integer

// int + string = string

console.log('object' + 10);



// =============================================================================
//                        SIMPLE OBJECT CREATION
// =============================================================================

let username = "hello";
let password = "1234";



// u can make a block, which is set for that area only

{
    let user = {
        username: username,
        password: password
    };

    console.log(user);
}



// =============================================================================
//                         CONSOLE METHODS
// =============================================================================

// alert("hello shrinidhi ")

console.warn("i am don");      // warning

console.error("i am error");   // error

console.log("hello shrinidhi");

console.table({
    "name": "james",
    "age": 20
});



// =============================================================================
//                          VARIABLE REASSIGNMENT
// =============================================================================

let an = 10;

a = 20;

console.log(a); // 20



const annnn = 10;

a = 20;

console.log(a); // 20



// =============================================================================
//                          INCREMENT OPERATOR
// =============================================================================

let counter = 0;

counter++; // increment counter by 1
counter++; // increment counter by 1
counter++; // increment counter by 1
counter++; // increment counter by 1
counter++; // increment counter by 1
counter++; // increment counter by 1
counter++; // increment counter by 1
counter++; // increment counter by 1
counter++; // increment counter by 1

console.log(counter);



// =============================================================================
//                        SPECIAL JAVASCRIPT VALUES
// =============================================================================

// NaN = not a number

// undefined = not defined

// null = empty value

// 0 = zero, -0 = negative zero, +0 = positive zero

// false = boolean false, true = boolean true

// all above are falsy values keywords

// anything + undefined = undefined/NaN

// =============================================================================
//                          Arthamatic OPERATORS
// =============================================================================

console. log("Operators in Js")
let a9 = 45;
let b9 = 4;
console. log("a + b = ", a9+b9)
console. log("a - b = ", a9-b9)
console. log("a / b = ", a9/b9)
console. log("a * b = ", a9*b9)
console. log("a ** b = ", a9**b9)
console. log("a % b = ", a9%b9)

// =============================================================================
//                          Assignment OPERATORS
// =============================================================================

console. log("Operators in Js")
let a5 = 45;
let b5 = 4;
console. log(a5 += b5)
console. log(a5 -= b5)
console. log(a5 *= b5)
console. log(a5 /= b5)
console. log(a5 **= b5)
console. log(a5 %= b5)

// =============================================================================
//                          COMPARISON OPERATORS
// =============================================================================

console.log(10 === "10"); // false, === is strict equality operator, checks value and type
console.log(10 == "10");  // true, == is loose equality operator, checks only value
console.log(10 !== "10"); // true, !== is strict inequality operator, checks value and type
console.log(10 != "10"); // true, != is loose inequality operator, checks only value
console.log(10 > "10"); // true, > is greater than operator, checks value and type
console.log(10 < "10"); // false, < is less than operator, checks value and type
console.log(10 >= "10"); // true, >= is greater than or equal to operator, checks value and type
console.log(10 <= "10"); // true, <= is less than or equal to operator, checks value and type

// =============================================================================
//                          Logical OPERATORS
// =============================================================================

console.log(10 || "10"); // 10, || is logical OR operato
console.log(10 && "10");  // "10", && is logical AND operator
console.log(!true); // true, !== is strict inequality operator, checks value and type

// =============================================================================
//                          TERNARY OPERATOR
// =============================================================================

{
    // ternary operators
    a = 12;
    const van = a > 15 ? "i am god" : "i am not";
    console.log(van);
    money = true;
    const idk = money == true
        ? "buy products"
        : "They should bring money";
    console.log(idk);

}

// =============================================================================
//                              STRINGS
// =============================================================================

// Collections of characters
// Strings are Immutable 

let first = "hello";

let second = "hi";

console.log(first[0]);  // Output: h


// ✅ Correct way to concatenate strings

let mix = first.concat(second);

console.log(mix); // Output: hello hi



// ✅ Append string using +=

first += "hiiioj";

console.log(first); // Output: hellohiiioj



// ✅ String length

console.log(first.length); // Output: length of the string
console.log(typeof first); // Output: string

let str2 = "Please give Rs 1000"
let amount = Number .parseInt(str2. slice(15))
console. log( amount)
console. log( typeof amount)



// ✅ Lowercase

console.log(first.toLowerCase());



// ✅ Uppercase

console.log(first.toUpperCase());

console.log(first.replace("hello", "hi")); // Output: hi
console.log(first.trim());
console.log(first.startsWith("h")); // Output: true
console.log(first.endsWith("o")); // Output: true



// ✅ Slice (0 to 5)

console.log(first.slice(0, 5)); // Output: hello



// ❌ reverse() does not exist for strings directly — convert to array first

console.log(first.split("").reverse().join("")); // Reverse the string



console.log(first.includes("foriegn"));



// =============================================================================
//                              DO WHILE LOOP
// =============================================================================

// ✅ Loop from i = 20 to 399

let i = 20;

do {

    console.log("Shrinidhi");

    i++;

} while (i < 400);



// =============================================================================
//                       ARRAY + JOIN + SPLIT
// =============================================================================

let first1 = [
    "rama",
    "shama",
    "bhama",
    "mama"
];

let first2 = first1.join("-");

console.log(first2);

console.log(first2.split("-"));

console.log(first1.includes("rama"));



// =============================================================================
//                         MULTI LINE STRINGS
// =============================================================================

let docstrings = `hvbjhugfghcvbjhugjf
vnbmmjhbbcbmbmnbbkkbascjns
                            om namah shivaya, tat vastade , `;

console.log(docstrings);



// =============================================================================
//                          TEMPLATE LITERALS or String Interpolation
// =============================================================================

// f-strings

let variable1 = "Good";

let variable2 = "Morning";

let variable3 = "143";

console.log(`${variable1} ${variable2}` + " " + "madam" + " " + `${variable3}`);



// =============================================================================
//                         STRING → NUMBER
// =============================================================================

// String to integer Type conversion

console.log(parseInt(variable1) + " " + parseInt(variable3));

variable3 += variable3;

console.log(variable3);

console.log(Number(variable3));



// =============================================================================
//                         NUMBER → STRING
// =============================================================================

// int to string

let variable4 = 500;

let variable5 = String(variable4);

console.log(variable5);

console.log(typeof (variable5));

console.log(variable4.toString());



// =============================================================================
//                              ARRAY SORT
// =============================================================================

const ant = [1, 6, 5, 345, 5, 4, 6, 78];

console.log(ant.sort((a, b) => a - b)); // Ascending numeric sort

console.log(ant.sort((a, b) => b - a)); // Descending numeric sort

// =============================================================================
//                              OBJECTS
// =============================================================================

let vai = {
    good: "morning",
    bad: "evening",
    10: "ten",
    location: ["planet", "earth"]
};

vai.HELLO = "sweet";
vai.beauty = "kriti sanon";

// console.log(object);

console.log(vai);

delete vai.beauty;

console.log(vai);

console.log(Object.keys(vai).length);

console.log(vai.bad);

console.log(vai[10]);


let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
};

for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// Problem No 2
for (let key in marks) {
    console.log("The marks of " + key + " are " + marks[key]);
}

// =============================================================================
//                              ARRAYS
// =============================================================================

let arr = [1, 2, 3, 4];
let arr1 = [11, 21, 31, 41];
let arr2 = [21, 22, 23, 24];

console.log(arr.length);
console.log(arr.toString());
console.log(arr.join("_"))
console.log(arr.pop())
console.log(typeof (arr));
arr.push(5);
arr.shift(0); //rermove first element 
arr.unshift(0); //add first element
delete arr[2]; //delete element at index 2

arr = arr.concat(arr1, arr2); //concat arrays
console.log(arr);
arr2.sort()
console.log(arr2)

let compare=(a,b)=>{return a-b} //ascending order
let compare2=(a,b)=>{return b-a} //descending order
arr2.sort(compare)
console.log(arr2)

arr2.sort(compare2)
console.log(arr2)

// Add new elements to an array using splice() method
const myArr = [1, 2, 3, 4, 5];
myArr.splice(2, 1, 6, 7); // remove 1 element at index 2 and add 6,7
console.log(myArr);


const myArr2 = [1, 2, 3, 4, 5];
myArr2.slice(2); // Slice from index 2 to end
myArr2.slice(2,5); // Slice from index 2 to 5 (not including 5)
console.log(myArr);

console.log(arr2.reverse())


// =============================================================================
//                        OBJECT MODIFICATION
// =============================================================================

let car = {
    type: "HE",
    model: "kuv 100",
    colour: "pink"
};

console.log(car);

console.log(typeof (car));

car.type = "Toyato";

console.log(car);

car.wheels = "black";

console.log(car);



// =============================================================================
//                              FUNCTIONS
// =============================================================================
// block of code designed to perform a perticular task

function greet(num, name) {

    console.log("Nanna jeevake", num);

    console.log(`One and only star ,super star ${name}`);

}

greet(10, "Vijay Joseph");



// =============================================================================
//                      FUNCTION WITH RETURN VALUE
// =============================================================================

{
    function myFunction(num1, num2) {

        console.log(num1 * num2);

        return num1 * num2; // Added return statement to make the function meaningful

    }

    let b = myFunction(30, 40);

    let c = myFunction(50, 60);

}



// =============================================================================
//                       METHOD INSIDE OBJECT
// =============================================================================

{
    function greet() {

        console.log(`I love ${bro.q} and I hate ${bro.e}`); // ❌ bro not defined yet

    }

    const bro = {

        q: "shrinidhi",

        e: "vai",

        greet,

    };

    console.log(bro.greet());

}



// =============================================================================
//                    OBJECT METHOD USING FUNCTION
// =============================================================================

{
    const frog = {

        good: "India",

        better: "Russia",

        best: "USA",

        greet: function () {

            console.log(
                `i am in ${frog.good} and my wife in ${frog.better} and my parents in ${frog.best} `
            );

        }

    };

    console.log(frog.greet());

}



// =============================================================================
//                                 JSON
// =============================================================================

// Javascript object notation(JSON)

// IT TRANSMIT DATA between servers and web application

// it is data interchangable format

// it istores configuaration settings

// use json.stringify to convert js into javascript

const hello = {

    name: "Shrinidhi",

    place: "India",

    phone: "Poco",

    phone_number: "95687867657",

    girlfriends: {

        india: "shruti",

        usa: "monika",

        russia: "kriti"

    }

};

console.log(hello);

const A = JSON.stringify(hello); // js to json

console.log(A);

console.log(JSON.parse(A)); // json to js



// =============================================================================
//                          ARROW FUNCTIONS
// =============================================================================

// Arrow :-shorter way to define functions

function greet(name) {

    console.log("hello my name is " + `${name}`);

}

greet("Rajni");



// Arrow function

greet = (name) => {

    console.log("hello my name is " + `${name}`);

};

greet("Rajni");



// =============================================================================
//                      ENHANCED OBJECT LITERALS
// =============================================================================

{
    good = (name, password, address) => {

        return {

            name,

            password,

            address

        };

    };

    const hello = good("shrinidhi", 54667, "xchgjfghcvhg");

    console.log(hello);

    const hello1 = good("shri", 54987654, "xchgjgyfhgcvh");

    console.log(hello1);

    const hello2 = good("nidhi", 12345678667, "xtrdcvghcvhg");

    console.log(hello2);

}



// =============================================================================
//                         OBJECT METHODS
// =============================================================================

{
    const another = {

        sum: (a, b) => {

            return a + b;

        },

        mul: (a, b) => {

            return a * b;

        }

    };

    console.log(another.sum(4, 5));

    console.log(another.mul(3, 4));

}



// =============================================================================
//                          IF ELSE FUNCTION
// =============================================================================

{
    function greet(decision) {
        if (decision == true) {
            for (i = 0; i < 5; i++) {
                console.log(`desicion:${i}`);
            }
        }
        else if (decision == false) {
            for (i = 0; i < 5; i++) {
                console.log(`desicion:${i}`);
            }
        }
        else {
            console.log("hogo laude");
        }
    }
    greet(true);

}
// =============================================================================
//                          Switch case function
// =============================================================================
const expr = 'Papayas';
switch (expr) {
case 'Oranges' :
console.log('Oranges are $0.59 a pound.');
rbreak;
case 'Mangoes':
case 'Papayas':
console. log('Mangoes and papayas are $2.79 a pound.');
// expected output: "Mangoes and papayas are $2.79 a pound."
break;
default:
console.log(`Sorry, we are out of ${expr}.`);


// =============================================================================
//                        DEFAULT PARAMETERS
// =============================================================================

{
    function multiply(a, b = 1) { // default parameter,less priority than function call

        console.log(`multiplication:${a * b}`);

    }

    multiply(10, 5);

}



// =============================================================================
//                          SPREAD OPERATOR
// =============================================================================

{
    function color(a, b, c, d, e) {

        console.log(
            `music director:${a}\nhero:${b}\nDirector:${c}\nProducer:${d}\nstory:${e}`
        );

    }

    const movies = [
        "Anirudh",
        "Thalapathy",
        "Shankar",
        "TFI",
        "Rajmouli"
    ];

    color(movies);

    console.log();

    color(...movies); // spread operator

}



// =============================================================================
//                  ARRAY CONCAT USING SPREAD OPERATOR
// =============================================================================

{
    // Concatination using spread operator

    let a = [1, 2, 3, 4, 5];

    let b = [6, 7, 8, 9, 10];

    let concat = [...a, ...b];

    console.log(concat);

    console.log("om", ...a);

    const clone = [...a];

    console.log(clone); // shallow copy using spread operator

}



// =============================================================================
//                             REST OPERATOR
// =============================================================================

{
    // Rest operator

    function god(x, ...ok) { // rest operator:-take unlimited no of parameters

        console.log(x);

        console.log(`I am the one super one ${ok}`);

    }

    god("Shrinidhi", "Vikaram", "Rajni", "Sudeep", "Darshan");

}

// =============================================================================
//                         ARRAY DESTRUCTURING
// =============================================================================

{
    // destructuring of arrays

    const arr = ["one", "two", "three", "four"];

    const [rajni, surya, vikram] = arr;

    console.log(vikram);



    function func() {

        return [1, 2, 3];

    }

    let a, b;

    [a, , b] = func();

    console.log(a);

    console.log(b);



    // =============================================================================
    //                     ARRAY DESTRUCTURING WITH REST OPERATOR
    // =============================================================================

    const [a1, ...b1] = ["one", "two", "three", "four", "five"];

    console.log(a1);

    console.log();

    console.log(b1);



    const colors = ["red", "green", "blue", "yellow", "orange"];

    const [color1, color2, ...color3] = colors;

    console.log(color1);

    console.log(color2);

    console.log(color3);



    // =============================================================================
    //                        OBJECT DESTRUCTURING
    // =============================================================================

    // in object destructuring order doesn't matter but the name does matter

    const classess = {

        rubbish: "Girls",

        best: "Boys",

        rowdy: "Money",

        waste: "Teachers"

    };

    // this above is called objects

    const { rubbish, best, rowdy } = classess;

    // const[colorrrs1,colorrrs,colorrrs3]=classes
    // leads error, because in object destructuring
    // order doesn't matter, name does matter

    console.log(rubbish);

    console.log(best);

    console.log(rowdy);



    const person = {

        name: "Shrinidhi",

        age: 99,

        country: "Bharat mata ki jai"

    };

    console.log();

    const { name, age, country } = person;

    console.log(name);

    console.log(country);

    console.log(age);



    // =============================================================================
    //               OBJECT DESTRUCTURING WITH REST OPERATOR
    // =============================================================================

    let {

        super1,

        topiwala,

        ...nanu

    } = {

        super1: 100 + "cr",

        topiwala: 200 + "cr",

        kgf: 1000 + "cr",

        rrr: 2000 + "cr",

        jailer: 700 + "cr"

    };

    console.log(super1);

    console.log(topiwala);

    console.log(nanu);

}



// =============================================================================
//                  FUNCTION WITHOUT DESTRUCTURING
// =============================================================================

{
    // without function destructuring

    const all = {

        music: "Anirudh",

        music2: "Thaman ",

        music3: "A R Rehman",

        music4: "DSP",

        music5: "Ravi Basrur"

    };

    function movies(all) {

        console.log(all.music2 + "loves neha kakkar");

        console.log("but neha kakkar loves" + all.music);

        console.log(all.music + "will ghanta love her");

        console.log("so she married" + all.music3);

        console.log(
            "best part is both" +
            all.music4 +
            "and" +
            all.music5 +
            "married each other"
        );

    }

    movies(all);

}

console.log();



// =============================================================================
//                   FUNCTION WITH DESTRUCTURING
// =============================================================================

{
    // with function destructuring

    const all = {

        music: "Anirudh",

        music2: "Thaman ",

        music3: "A R Rehman",

        music4: "DSP",

        music5: "Ravi Basrur"

    };

    function movies({

        music,

        music2,

        music3,

        music4,

        music5

    }) {

        console.log(music2 + "loves neha kakkar");

        console.log("but neha kakkar loves" + music);

        console.log(music + "will ghanta love her");

        console.log("so she married" + music3);

        console.log(
            "best part is both" +
            music4 +
            "and" +
            music5 +
            "married each other"
        );

    }

    movies(all);

}




// =============================================================================
//                               FOR...IN LOOP for Objects => In gives keys
// =============================================================================

{
    // for in loop

    let me = {
        name: "god",
        aim: "Billionaire",
        parents: "Teachers",
        hate: "Gareebi"
    };

    // Iterates over object keys
    for (let index in me) {
        console.log(index, me[index]);
    }

    console.log();

    let me1 = [
        "name",
        "aim",
        "parents",
        "hate"
    ];

    // Iterates over array indexes
    for (let index in me1) {
        console.log(index, me1[index]);
    }

}



// =============================================================================
//                               FOR...OF LOOP for Arrays
// =============================================================================

{
    // for of loop

    console.log();

    let me1 = [
        "name",
        "aim",
        "parents",
        "hate"
    ];

    // Prints indexes because 'in' returns keys , so it gives its index
    for (let good in me1) {
        console.log(good);
        console.log(me1[good]);
    }

    // Prints values because 'of' returns values
    for (let good of me1) {
        console.log(good);
    }

}



// =============================================================================
//                              FOREACH LOOP
// =============================================================================

{
    // for each loop = its used , when u want to iterate over an array and perform a function on each element of the array.

    console.log();

    let me1 = [
        "name",
        "aim",
        "parents",
        "hate"
    ];

    me1.forEach((i, a, color, b, c) => console.log(i, a, color, b, c));

    console.log();

    let god2 = me1.forEach((word, index, arr2) => {
        arr2[index] = word[0].toUpperCase() + word.substring(1);
    });

    console.log(me1);

    console.log();

    let numbers = [1, 2, 3, 4, 5, 6, 7];

    let sum = 0;

    function add(number) {
        sum += number;
    }

    numbers.forEach(add);

    console.log(sum);

    numbers.forEach((element)=>{
        console.log(element*element)
    })

}


// =============================================================================
//                              FROM LOOP
// =============================================================================

// Used to create an array from an array-like or iterable object. It allows you to convert objects such as NodeLists, Sets, or strings into arrays.

let name="Shrinidhi";
let arr=Array.from(name);
console.log(arr)


// =============================================================================
//                                   MAP()
// =============================================================================

// Higher order function that takes a callback function as an argument and applies it to each element of the array, returning a new array with the results.

{
    // map:-it won't modify existing array like for each loop,
    // it gives new array by performing a function on each element of the array 

    // filter:-based on certain condition

    let arr = [1, 2, 3, 4, 5, 6, 7];
    let arr2 = arr.map(num => num ** 2);
    console.log(arr2);

    console.log();

    let arr1 = [1, 2, 3, 4, 5, 6, 7];

    function func(arr1) {
        return arr1 * 2;
    }

    let arr3 = arr.map(func);

    let arr4 = arr.filter(func => func % 2 == 0);
    console.log(arr2);
    console.log(arr4);



// =============================================================================
//                                 FILTER()
// =============================================================================

    const songs = [
        { tamil: "Alappora", views: 123 },
        { kannada: "Kanmaniye", views: 122 },
        { telagu: "Butta bomma", views: 172 },
        { maliyalam: "armadam", views: 120 }
    ];

    let om = songs.filter((song) => song.views <= 122);

    console.log(om);

    ///////////////////////////////////////////////////////////////////////////

    const mobile = [
        { poco: 1, snap: 100, no: 1 },
        { apple: 2, insta: 200, no: 2 },
        { vivo: 3, whatsup: 300, no: 3 },
        { redmi: 4, software: 400, no: 4 }
    ];

    let some = mobile.filter((ok) => ok.no >= 3);

    console.log(some);

    ////////////////////////////////////////////////////////

    const term = [1, 2, 3, 4, 5, 18, 45, 27, 28, 49, 20];

    function adult(term1) {
        return term1 >= 18;
    }

    let good = term.filter(adult);

    console.log(good);

    ////////////////////////////////////////////////////

    const words = [
        "hello",
        "kanakdas",
        "devdas",
        "purandardas",
        "leodas",
        "antonydas",
        "harolddas",
        "elisadas"
    ];

    function loopy(sow) {
        return sow.length > 6;
    }

    let dove = words.filter(loopy);

    console.log(dove);

}



// =============================================================================
//                                  FIND()
// =============================================================================

{
    // find()

    const mobile = [
        { poco: 1, snap: 100, no: 1 },
        { apple: 2, insta: 200, no: 2 },
        { vivo: 3, whatsup: 300, no: 3 },
        { redmi: 4, software: 400, no: 4 },
        { redmi: 4, software: 400, no: 4 }
    ];

    let om = mobile.find(hel => hel.software == 400);

    console.log(om);

    console.log();

    let om1 = mobile.filter(hel => hel.software == 400);

    console.log(om1);

}



// =============================================================================
//                           FILTER EXAMPLE
// =============================================================================

{
    const ages = [3, 10, 18, 20];

    function adult(ages) {
        return ages >= 18;
    }

    let index = ages.filter(adult);

    console.log(index);

}



// =============================================================================
//                                EVERY()
// =============================================================================

{
    // every() is a function that checks every element in array satisfies,
    // even if 1 doesn't satisfy ,it returns false

    const god = [
        "laxmi",
        "saraswati",
        "mookambika",
        "ganesh",
        "kali"
    ];

    let sorry = god.every(hel => hel.length >= 6);

    console.log(sorry);

}



// =============================================================================
//                                 SOME()
// =============================================================================

{
    // some() function returns true ,
    // even if 1 member of that array satisfies the condition

    const god = [
        "laxmi",
        "saraswati",
        "mookambika",
        "ganesh",
        "kali"
    ];

    let sorry = god.some(hel => hel.length >= 6);

    console.log(sorry);

}



// =============================================================================
//                      EVERY() & SOME() OBJECT EXAMPLE
// =============================================================================

{
    const mobile = [
        { poco: 1, snap: 100, no: 1 },
        { apple: 2, insta: 200, no: 2 },
        { vivo: 3, whatsup: 300, no: 3 },
        { redmi: 4, software: 400, no: 4 },
        { redmi: 4, software: 400, no: 4 }
    ];

    let god = mobile.every(people => people.software >= 300);

    console.log(god);

    console.log();

    let god1 = mobile.some(people => people.software >= 300);

    console.log(god1);

} 

// =============================================================================
//                                REDUCE()
// =============================================================================

{
    // reduce() reduces the array to single value

    const num = [1, 2, 3, 4, 5, 6];

    let sum1 = num.reduce((accu, add1) => {

        console.log(accu);
        console.log(add1);
        return accu + add1;

    }, 0);

    console.log(sum1);

}



// =============================================================================
//                          REDUCE() EXAMPLES
// =============================================================================

{
    // reduce

    const ages = [
        { name: "shrinidhi", age: 500 },
        { name: "vijay", age: 700 },
        { name: "great", age: 900 },
        { name: "Alexander", age: 1200 }
    ];

    let om = ages.reduce((p, c) => c.age > p ? c.age : p);

    console.log(om);



    // calculateProduct() function

    const dooper = [2, 3, 4, 5];

    function calculateProduct(dooper) {

        return dooper.reduce((p, c) => p * c);

    }

    let god = calculateProduct(dooper);

    console.log(god);

}



// =============================================================================
//                                   MAP
// =============================================================================

// Map():-is a function to make key-value pair

{
    let one = new Map();

    let keyone = "god";

    let keytwo = "devil";

    let keythree = { daa: "dbms" };

    let keyfour = function gol() {

        console.log("i am god");

    };

    let keyfive = function () {

        console.log("And im devil");

    };



    one.set(keyone, "lorem10");

    one.set(keytwo, "nanavanalla");

    one.set(keythree, "billionaires");



    console.log(one);

    console.log(one.size);

    console.log(one.keys());

    console.log(one.values());



    // returns true if it is existed in key:value pair

    console.log(one.delete(keytwo));



    // Iterate complete Map

    for (let [key, value] of one) {

        console.log(key, value);

    }



    // Iterate only keys

    for (let key of one.keys()) {

        console.log(key);

    }



    // Iterate only values

    for (let value of one.values()) {

        console.log(value);

    }

}



// =============================================================================
//                          MAP METHODS
// =============================================================================

{
    let first = new Map();

    first.set("a", 1);

    first.set("b", 2);

    first.set("c", 3);



    console.log(first.size);

    console.log(first.delete("b"));

    console.log(first.get("a"));

}



// =============================================================================
//                              DATE OBJECT
// =============================================================================

const date = new Date();

console.log(date);



const year = date.getFullYear();

const month = date.getMonth();

const day = date.getDay();

const hours = date.getHours();

const minutes = date.getMinutes();

const milliseconds = date.getMilliseconds();



console.log(

    `i am the boss in ${year} there was a month ${month} who's name is ${day} and his wife ${hours} without ${minutes} and ${milliseconds}`

);



// year, month, day, hours, minutes, seconds, milliseconds

console.log();



// =============================================================================
//                          CUSTOM DATE OBJECT
// =============================================================================

const date1 = new Date(2024, 9, 25, 26, 1, 2, 3);

console.log(date1);

console.log(date.toDateString());

console.log(date.toLocaleDateString());

console.log(date.toJSON());

console.log(date.toISOString());



// =============================================================================
//                             setInterval()
// =============================================================================

// setInterval(
//     ()=>console.log(`the function will be executed every 3 seconds, if u put 3000`),3000
// );

// this runs continuesly to infinity



// =============================================================================
//                             setTimeout()
// =============================================================================

// Anonymous function

setTimeout(function () {

    console.log(`this function will be executed after 3 seconds`);

}, 3000);

// this runs only once



// =============================================================================
//                      STOPPING setInterval()
// =============================================================================

{

    // stop the interval after 10 seconds

    const intervalID = setInterval(function () {

        console.log(`this function is being executed at the interval`);

    }, 1000);



    setTimeout(function () {

        clearInterval(intervalID);

        console.log("interval stopped");

    }, 10000);

}

// =============================================================================
//                     DOCUMENT OBJECT MODEL (DOM)
// =============================================================================

// dom=document object model

console.log(document);

console.log(document.head);

console.log(document.title);

console.log(document.body);

console.log(document.URL);



// =============================================================================
//                             DOM SELECTORS
// =============================================================================

// 1)getElementByTagName

console.log(document.getElementsByTagName("h1"));

console.log(document.getElementsByTagName("h1").length);



// =============================================================================
//                            getElementById()
// =============================================================================

// 2)getElementById

console.log(document.getElementById("id"));



// =============================================================================
//                        getElementsByClassName()
// =============================================================================

// 3)getElementByClassName

console.log(document.getElementsByClassName("main"));



// =============================================================================
//                           querySelector()
// =============================================================================

// 4)querySelector

console.log(document.querySelector(".main"));

console.log(document.querySelector("#id"));



// =============================================================================
//                          querySelectorAll()
// =============================================================================

// 5)querySelectorAll

console.log(document.querySelectorAll(".main"));

console.log();



// =============================================================================
//                    MORE DOM ELEMENT SELECTION
// =============================================================================

console.log(document.getElementsByTagName("h4"));

console.log(document.getElementsByTagName("green"));

console.log(document.getElementsByTagName("blue"));



// =============================================================================
//                innerHTML | innerText | textContent
// =============================================================================

const object = document.querySelector(".main");

console.log(object.innerHTML);

console.log(object.innerText);

console.log(object.textContent);



// =============================================================================
//                        MODIFYING HTML CONTENT
// =============================================================================

const h1 = document.querySelector("h1");

h1.innerHTML = "<em>BOSS super</em>";

console.log(h1);



// =============================================================================
//                innerText | innerHTML | textContent
// =============================================================================

const om = document.querySelector(".beautiful");

console.log(om.innerText);

console.log(om.innerHTML);

console.log(om.textContent);



// =============================================================================
//                           classList METHODS
// =============================================================================

{

    const h5 = document.querySelector("h5");

    console.log(h5.classList); //output all lists of class



    h5.classList.add("hariom"); //adds another new class



    h5.classList.remove("two"); //removes class



    console.log(h5.classList);



    // it adds the class name if it doesn't have it,
    // it removes the class if it exist

    h5.classList.toggle("apple");



    console.log(h5.classList);

}



// =============================================================================
//                          LINK (ANCHOR) TAG
// =============================================================================

{

    const a = document.querySelector("a");

    console.log(a.href);

    console.log(a.href = "https://youtube.com");

}



// =============================================================================
//                         INPUT ELEMENT PROPERTIES
// =============================================================================

{

    const b = document.querySelector(".class");



    console.log(b.value);

    console.log(b.type);



    console.log(b.Placeholder = "kolamande");



    // getAttributes

    console.log(b.getAttribute("type"));

    console.log(b.getAttribute("placeholder"));



    // setAttributes

    console.log(b.setAttribute("placeholder", "password"));

    console.log(b.setAttribute("type", "password"));

}



// =============================================================================
//                      ATTRIBUTE MANIPULATION
// =============================================================================

{

    console.log("///////////////////////////////////");



    const a = document.querySelector("a");



    console.log(a);



    console.log(a.href = "https://youtube.com");



    console.log(a.getAttribute("href"));



    console.log(a.setAttribute("a-two", "href"));



    console.log(a.setAttribute("attrName", "value"));



    const b = document.querySelector("a-two");



    console.log(b);

    console.log(b.href);

}

// =============================================================================
//                               VARIABLES
// =============================================================================

// let => variable that can be reassigned (Better)

// const => variable that cannot be reassigned (Best)

// var => variable that can be reassigned and has function scope (not recommended)

let myVariable; // Camel case

myVariable = 10;

console.log(typeof myVariable);

// alert("Hello World")



var myVariable2 = "Hello World";

console.log(myVariable2);



let myVariable3 = true;

console.log(myVariable3);



const myVariable4 = 3.14;

console.log(myVariable4);



// =============================================================================
//                                OBJECTS
// =============================================================================

// Objects => key-value pairs (Non-primitive)

const myObject = {

    name: "John",

    age: 30,

    isStudent: false,

    Shrinidhi: "Developer"

};

console.log(myObject.name);        // Dot notation

console.log(myObject["age"]);      // Bracket notation



// =============================================================================
//                                 ARRAYS
// =============================================================================

const myArray = [1, 2, 3, 4, 5];

console.log(myArray[0]); // First element



// Add element

myArray.push(6);

console.log(myArray);



// Remove last element

myArray.pop();

console.log(myArray);



// =============================================================================
//                                FUNCTIONS
// =============================================================================

function myFunction(a, b) {

    return a + b;

}

console.log(myFunction(5, 10));



// Arrow function

const myArrowFunction = (a, b) => {

    return a * b;

};

console.log(myArrowFunction(5, 10));



// =============================================================================
//                              DATA TYPES
// =============================================================================

// Primitive:
// ============
// string
let myString = "Hello, World!";
console.log(myString);
// number
let myNumber = 42;
console.log(myNumber);
// boolean
let myBoolean = true;
console.log(myBoolean);
// null
let myNull = null;
console.log(myNull);
// undefined
let myUndefined;
console.log(myUndefined);
// symbol 
let mySymbol = Symbol("description");
console.log(mySymbol);
// bigint
let myBigInt = 1234567890123456789012345678901234567890n;
console.log(myBigInt);
// or
let myBigInt2 = BigInt("1234567890123456789012345678901234567890");
console.log(myBigInt2);

// Non-primitive:
// ================
// object
// array
// function

// =============================================================================
//                             typeof()
// =============================================================================

console.log(typeof (myString));
console.log(typeof (myNumber));
console.log(typeof (myBoolean));
console.log(typeof (myNull));
console.log(typeof (myUndefined));
console.log(typeof (mySymbol));
console.log(typeof (myBigInt));
console.log(typeof (myBigInt2));

// =============================================================================
//                            TYPE COERCION
// =============================================================================

let x1 = "5";

let y1 = 10;

console.log(x1 + y1); // "510"

console.log(x1 * y1); // 50



// =============================================================================
//                               EQUALITY
// =============================================================================

console.log(5 == "5");    // true

console.log(5 === "5");   // false



// =============================================================================
//                          CONTROL STRUCTURES
// =============================================================================

let ageCheck = 18;

if (ageCheck >= 18) {

    console.log("You are an adult.");

}

else {

    console.log("You are a minor.");

}



// =============================================================================
//                                  LOOPS
// =============================================================================

// for loop

for (let i = 0; i < 5; i++) {

    console.log(i);

}



// while loop

let j = 0;

while (j < 5) {

    console.log(j);

    j++;

}



// =============================================================================
//                                 SCOPE
// =============================================================================

function myScopeFunction() {

    let localVariable = "I am local";

    console.log(localVariable);

}

myScopeFunction();



// Block scope

if (true) {

    let blockVariable = "I am block scoped";

    console.log(blockVariable);

}



// =============================================================================
//                               HOISTING
// =============================================================================

console.log(hoistedVariable); // undefined

var hoistedVariable = "I am hoisted";

console.log(hoistedVariable);



// let/const NOT hoisted

let notHoistedVariable = "I am not hoisted";

console.log(notHoistedVariable);



// =============================================================================
//                           DICTIONARY (OBJECT)
// =============================================================================
const myDictionary = {

    name: "Alice",
    male: true,
    age: 25,
    Teja_gender: undefined,
    city: "New York"

};

console.log(myDictionary["name"]);


// =============================================================================
//                           CONSOLE METHODS
// =============================================================================

console.log("Hello world");

console.error("Hello world");

console.warn("Hello world");

console.info("Hello world");



// =============================================================================
//                         USER INPUT (COMMENTED)
// =============================================================================

// alert("Welcome to JavaScript")

// var a = prompt("Enter Your name:")

// console.log("Hello " + a)



// =============================================================================
//                         CONDITIONAL EXAMPLE
// =============================================================================

var age = 30;

var ageValue = 308;

console.log("Your age is " + ageValue);

if (age) {

    console.log("You are eligible to vote.");

}

else {

    console.log("You are not eligible to vote.");

}



// =============================================================================
//                        VARIABLE BEHAVIOR
// =============================================================================

// var redeclaration

var x2 = 5;

var x2 = 10;

console.log(x2);



// let scope

let y2 = 5;

{

    let y2 = 10;

    console.log(y2);

}



// const

const z = 5;

console.log(z);



// =============================================================================
//                          OBJECT EXAMPLE
// =============================================================================

let Movie = {

    Movie_Name: "KGF",

    Actor: "Yash",

    Actress: "Srinidhi Shetty",

    Director: "Prashanth Neel",

    Release_Year: 2018

};

console.log(Movie);



// Add new property

Movie.Genre = "Action";



// =============================================================================
//                          OBJECT ITERATION
// =============================================================================

// for...in

for (let key in Movie) {

    console.log(key + ": " + Movie[key]);

}



// Object.keys()

for (let key of Object.keys(Movie)) {

    console.log(`${key}: ${Movie[key]}`);

}



// Object.entries()

for (let [key, value] of Object.entries(Movie)) {

    console.log(`${key}: ${value}`);

}

// =============================================================================
//                       ENHANCED OBJECT LITERALS
// =============================================================================

// ///////////////////////////////////////
// Enhancement literals

const good = (name, password, address) => {
    return {
        name,
        password,
        address
    };
};

const hello = good("shrinidhi", 54667, "xchgjfghcvhg");
console.log(hello);

const hello1 = good("shri", 54987654, "xchgjgyfhgcvh");
console.log(hello1);

const hello2 = good("nidhi", 12345678667, "xtrdcvghcvhg");
console.log(hello2);
}