// Arrow :-shorter way to define functions
function greet(name){
    console.log("hello my name is "+`${name}`);
}
greet("Rajni")
// Arrow function
greet=(name)=>{
    console.log("hello my name is "+`${name}`);
}
greet("Rajni")

// ///////////////////////////////////////
// Enhancement literals
{good=(name,password,address)=>{
    return {name,
    password,
    address}

}
const hello=good("shrinidhi",54667,"xchgjfghcvhg");
console.log(hello);
const hello1=good("shri",54987654,"xchgjgyfhgcvh");
console.log(hello1);
const hello2=good("nidhi",12345678667,"xtrdcvghcvhg");
console.log(hello2);
}
{
    const another={
        sum:(a,b)=>{
            return a+b;
        },
        mul:(a,b)=>{
            return a*b;
        }
    }
    console.log(another.sum(4,5));
    console.log(another.mul(3,4));
}

{
    function greet(decision){
        if(decision==true){
            for(i=0;i<5;i++){
                console.log(`desicion:${i}`);
            }
        }
        else{
            console.log("hogo laude");
        }
    }
    greet(true)
}

{
    function multiply(a,b=1){ //default parameter,less priority than function call
        console.log(`multiplication:${a*b}`);
    }
    multiply(10,5)
}
{
    function color(a,b,c,d,e){
        console.log(`music director:${a}\nhero:${b}\nDirector:${c}\nProducer:${d}\nstory:${e}`);
    }
    const movies=["Anirudh","Thalapathy","Shankar","TFI","Rajmouli"]
    color(movies)
    console.log();
    color(...movies) //spread operator
}
{
    // Concatination using spread operator 
    let a =[1,2,3,4,5]
    let b= [6,7,8,9,10]
    let concat= [...a,...b]
    console.log(concat);
    console.log("om",...a);
    const clone=[...a]
    console.log(clone); //shallow copy using spread operator

}
// Rest operator
{
    function god(x,...ok){ //rest operator:-take unlimited no of parameters
        console.log(x);
        console.log(`I am the one super one ${ok}`);
    }
    god("Shrinidhi","Vikaram","Rajni","Sudeep","Darshan")
}
// destructuring of arrays
{
const arr=["one","two","three","four"]
const [rajni,surya,vikram]=arr
console.log(vikram);

function func(){
    return [1,2,3];
}
let a,b;
[a, ,b]=func();
console.log(a);
console.log(b);

const [a1, ...b1]=["one","two","three","four","five"]
console.log(a1);
console.log();
console.log(b1);

const colors=["red","green","blue","yellow","orange"];
const [color1,color2,...color3]=colors
console.log(color1);
console.log(color2);
console.log(color3);

// in object destructuring order doesn't matter but the name does matter
const classess ={
    rubbish:"Girls",
    best:"Boys",
    rowdy:"Money",
    waste:"Teachers"
};
// this above is called objects
const{rubbish,best,rowdy}=classess
// const[colorrrs1,colorrrs,colorrrs3]=classes //leads error, because in object destructuring order doesn't matter, name does matter
console.log(rubbish);
console.log(best);
console.log(rowdy);

const person={
    name:"Shrinidhi",
    age:99,
    country:"Bharat mata ki jai"
}
console.log();
const {name, age, country}=person
console.log(name);
console.log(country);
console.log(age);
// object destructuring with rest operator
let { super1, topiwala, ...nanu } = {
    super1: 100 + "cr",
    topiwala: 200 + "cr",
    kgf: 1000 + "cr",
    rrr: 2000 + "cr",
    jailer: 700 + "cr"
}
console.log(super1)
console.log(topiwala)
console.log(nanu);
}
{
    // without function destructuring
    const all={
        music:"Anirudh",
        music2:"Thaman ",
        music3:"A R Rehman",
        music4:"DSP",
        music5:"Ravi Basrur"
    }
    function movies(all){
        console.log(all.music2+"loves neha kakkar");
        console.log("but neha kakkar loves"+all.music);
        console.log(all.music+"will ghanta love her");
        console.log("so she married"+all.music3);
        console.log("best part is both"+all.music4+"and"+all.music5+"married each other");

    }
    movies(all)
}
console.log();
{
    // with function destructuring
    const all={
        music:"Anirudh",
        music2:"Thaman ",
        music3:"A R Rehman",
        music4:"DSP",
        music5:"Ravi Basrur"
    }
    function movies({music,music2,music3,music4,music5}){
        console.log(music2+"loves neha kakkar");
        console.log("but neha kakkar loves"+music);
        console.log(music+"will ghanta love her");
        console.log("so she married"+music3);
        console.log("best part is both"+music4+"and"+music5+"married each other");

    }
    movies(all)
}

{
    // ternary operators
    a=12
    const van = a>15 ? "i am god":"i am not"
    console.log(van);

    money=true
    const idk = money==true?"buy products":"They should bring money"
    console.log(idk);
}

{
    // for in loop
    let me={
        name:"god",
        aim:"Billionaire",
        parents:"Teachers",
        hate:"Gareebi"
    }
    for (let index in me){
        console.log(index, me[index]);
    }
    console.log();
      let me1=[
        "name",
        "aim",
        "parents",
        "hate"
      ]
    for (let index in me1){
        console.log(index, me1[index]);
    }

}
{
    // for of loop
    console.log();
      let me1=[
        "name",
        "aim",
        "parents",
        "hate"
      ]
      for(let good in me1){
        console.log(good);
      }
      for(let good of me1){
        console.log(good);
      }

}
{
    // for each loop 
    console.log();
      let me1=[
        "name",
        "aim",
        "parents",
        "hate"
      ]
      me1.forEach((i,a,color,b,c)=>console.log(i,a,color,b,c))
      console.log();
      let god2=me1.forEach((word,index,arr2)=>{arr2[index]=word[0].toUpperCase()+word.substring(1)})
      console.log(me1);
    console.log();
      let numbers=[1,2,3,4,5,6,7]
      let sum=0;
      function add(number){
        sum+=number;
    }
    numbers.forEach(add);
    console.log(sum);

}
{
    // map:-it won't modify existing array like for each loop, it gives new array
    // filter:-based on certain condition
    let arr=[1,2,3,4,5,6,7]
    let arr2=arr.map(num=>num**2)
    console.log(arr2);
    console.log();
     let arr1=[1,2,3,4,5,6,7]
     function func(arr1){
        return arr1*2
     }
    let arr3=arr.map(func)
    let arr4=arr.filter(func=>func%2==0)
    console.log(arr2);
    console.log(arr4);

    const songs=[
        {tamil:"Alappora",views:123},
        {kannada:"Kanmaniye",views:122},
        {telagu:"Butta bomma",views:172},
        {maliyalam:"armadam",views:120}
        
    ]
    
    let om=songs.filter((song)=>song.views<=122)
    console.log(om);
///////////////////////////////////////////////////////////////////////////
    const mobile=[
        {poco:1, snap:100, no:1},
        {apple:2, insta:200,no:2},
        {vivo:3, whatsup:300,no:3},
        {redmi:4, software:400,no:4}
    ]
    let some=mobile.filter((ok)=>ok.no>=3)
    console.log(some);
////////////////////////////////////////////////////////
    const term=[1,2,3,4,5,18,45,27,28,49,20]
    function adult(term1){
        return term1>=18
    }
    let good=term.filter(adult)
    console.log(good);
////////////////////////////////////////////////////
    const words=["hello","kanakdas","devdas","purandardas","leodas","antonydas","harolddas","elisadas"]
    function loopy(sow){
        return sow.length>6
    }
    let dove=words.filter(loopy)
    console.log(dove);


}
{   //find()
    const mobile=[
        {poco:1, snap:100, no:1},
        {apple:2, insta:200,no:2},
        {vivo:3, whatsup:300,no:3},
        {redmi:4, software:400,no:4},
        {redmi:4, software:400,no:4}
    ]
    let om=mobile.find(hel=>hel.software==400)
    console.log(om);
    console.log();
    let om1=mobile.filter(hel=>hel.software==400)
    console.log(om1);

}
{
    const ages=[3,10,18,20]
    function adult(ages){
        return ages>=18
    }
    let index=ages.filter(adult)
    console.log(index);
}
{
    // every() is a function that checks every element in array satisfies, even if 1 doesn't satisfy ,it returns false
    const god=["laxmi","saraswati","mookambika","ganesh","kali"]
    let sorry=god.every(hel=>hel.length>=6)
    console.log(sorry);

}
{   
    // some() function returns true ,even if 1 member of that array satisfies the condition
    const god=["laxmi","saraswati","mookambika","ganesh","kali"]
    let sorry=god.some(hel=>hel.length>=6)
    console.log(sorry);
}
{
    const mobile=[
        {poco:1, snap:100, no:1},
        {apple:2, insta:200,no:2},
        {vivo:3, whatsup:300,no:3},
        {redmi:4, software:400,no:4},
        {redmi:4, software:400,no:4}
    ]
    let god=mobile.every(people=>people.software>=300)
    console.log(god);
    console.log();
    let god1=mobile.some(people=>people.software>=300)
    console.log(god1);
}
{
    // reduce() reduces the array to single value
    const num=[1,2,3,4,5,6]
    let sum1=num.reduce((accu, add1)=>{
    console.log(accu);
    console.log(add1) ;return accu+add1},0)
    
    console.log(sum1);
}
{
    // reduce
    const ages=[
        {name:"shrinidhi",age: 500},
        {name:"vijay",age:700},
        {name:"great",age:900},
        {name:"Alexander",age:1200}

    ]
    let om=ages.reduce((p,c)=>c.age>p?c.age:p)
    console.log(om);
    // calculateproduct() function
    const dooper=[2,3,4,5]
    function calculateProduct(dooper){
        return dooper.reduce((p,c)=>p*c)
    }
    let god=calculateProduct(dooper)
    console.log(god);
}
// Map():-is a function to make key-value pair
{
    let one=new Map();
    let keyone="god";
    let keytwo="devil";
    let keythree={daa:"dbms"};
    let keyfour=function gol(){
        console.log("i am god");
    };
    let keyfive=function(){
        console.log("And im devil");
    };
    one.set(keyone,"lorem10")
    one.set(keytwo,"nanavanalla")
    one.set(keythree,"billionaires")
    console.log(one);
    console.log(one.size);
    console.log(one.keys());
    console.log(one.values()); 
    console.log(one.delete(keytwo));//returns true if it is existed in key:value pair
    for(let[key,value] of one){
        console.log(key,value);
    }
    for(let key of one.keys()){
        console.log(key);
    }
    for(let value of one.values()){
        console.log(value);
    }
}
{
    let first=new Map();
    first.set("a",1);
    first.set("b",2);
    first.set("c",3);
    console.log(first.size);
    console.log(first.delete("b"));
    console.log(first.get("a"));
}
