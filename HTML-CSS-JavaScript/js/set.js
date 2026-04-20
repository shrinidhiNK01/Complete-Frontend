// sets are collection of unique values, no repetation
{   const sample=[1,2,3,3,3,3,3,3,3,3,3,3,3,4,5,6]
    let simple=new Set(sample);
    simple.add("banana"),
    simple.add("apple"),
    simple.add("goat")
    // simple.clear(); clears all properties
console.log(simple.has("banana"));    
console.log(simple);
for (let i of simple) {
    console.log(i);
}
}
{   
    let letters=['i','q','w','s','d']
    let vamshi=new Set(letters);
    vamshi.add("a")
    vamshi.add("b")
    vamshi.add("c")
    console.log(vamshi);
    for(let i of vamshi){
        console.log(i);

    }
    
}
// symbol is a immutable primitive unique data type
const hello=Symbol("It is impossible");
const hello1=Symbol("It is impossible");
console.log(hello==hello1);
console.log(hello);

const obj={};
obj[hello]="value1";
obj[hello1]="value2";
console.log(obj);

const plus={};
plus.age=500;
plus.address="usa"
plus["gender"]="male"
plus[Symbol("i am supreme")]="Upendra"
console.log(plus);

{
    const foo=Symbol();
console.log(typeof foo);
let obj2={};
obj2.age=19;
obj2.address="washington dc";
obj2.class="mass";
obj2[Symbol("I am the god ,god is great")]="Bombay ka badshaha";
obj2["name"]="vikram rathod";
console.log(obj2);
for(let i in obj2){
    console.log(i);
}
}