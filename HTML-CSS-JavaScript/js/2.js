// method inside object
{
    function greet() {
    console.log(`I love ${bro.q} and I hate ${bro.e}`); // ❌ `bro` not defined yet
}

const bro = {
    q: "shrinidhi",
    e: "vai",
    greet,
};
console.log(bro.greet());
}

{
    const frog={
        good:"India",
        better:"Russia",
        best:"USA",
        greet:function(){
            console.log(`i am in ${frog.good} and my wife in ${frog.better} and my parents in ${frog.best} `);
        }

    };
    console.log(frog.greet());
}
// Javascript object notation(JSON)
// IT TRANSMIT DATA between servers and web application 
// it is data interchangable format
// it istores configuaration settings
// use json.stringify to convert js into javascript

const hello={
    name:"Shrinidhi",
    place:"India",
    phone:"Poco",
    phone_number:"95687867657",
    girlfriends:{
        india:"shruti",
        usa:"monika",
        russia:"kriti"
    }
}
console.log(hello);
A=JSON.stringify(hello) //js to json
console.log(A);
console.log(JSON.parse(A));//json to js