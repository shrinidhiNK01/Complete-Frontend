const date=new Date();
console.log(date);
const year=date.getFullYear();
const month=date.getMonth();
const day=date.getDay();
const hours=date.getHours();
const minutes=date.getMinutes();
const milliseconds=date.getMilliseconds();
console.log(`i am the boss in ${year} there was a month ${month} who's name is ${day} and his wife ${hours} without ${minutes} and ${milliseconds}`);
// year, month, day, hours, minutes, seconds, milliseconds
console.log();
const date1=new Date(2024,9,25,26,1,2,3);
console.log(date1);
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toJSON());
console.log(date.toISOString());

// setInterval(
//     ()=>console.log(`the function will be executed every 3 seconds, if u put 3000`),3000
// );   // this runs continuesly to infinity

// Anonymous function
setTimeout(function(){
    console.log(`this function will be executed after 3 seconds`);
},3000)  //this runs only once

{// stop the interval after 10 seconds
const intervalID=setInterval(function(){
    console.log(`this function is being executed at the interval`);
},1000);
setTimeout(function(){
    clearInterval(intervalID)
    console.log("interval stopped");
},10000)

}