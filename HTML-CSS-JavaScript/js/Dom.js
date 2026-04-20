// dom=document object model
console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

// DOM SELECTORS
// 1)getElementByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);
// 2)getElementById
console.log(document.getElementById("id"));
// 3)getElementByClassName
console.log(document.getElementsByClassName("main"));
// 4)querySelector
console.log(document.querySelector(".main"));
console.log(document.querySelector("#id"));
// 5)querySelectorAll
console.log(document.querySelectorAll(".main"));
console.log();
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(document.getElementsByTagName("h4"));
console.log(document.getElementsByTagName("green"));
console.log(document.getElementsByTagName("blue"));

const object=document.querySelector(".main")
console.log(object.innerHTML);
console.log(object.innerText);
console.log(object.textContent);

const h1=document.querySelector("h1")
h1.innerHTML="<em>BOSS super</em>"
console.log(h1);

const om=document.querySelector(".beautiful");
console.log(om.innerText);
console.log(om.innerHTML);
console.log(om.textContent);
{
const h5=document.querySelector("h5");
console.log(h5.classList); //output all lists of class
h5.classList.add("hariom") //adds another new class
h5.classList.remove("two") //removes class
console.log(h5.classList);
h5.classList.toggle("apple") //it adds the class name if it doesn't have it, it removes the class if it exist
console.log(h5.classList);

}

{
    const a=document.querySelector("a")
    console.log(a.href);
    console.log(a.href="https://youtube.com");
}
{
    const b=document.querySelector(".class")
    console.log(b.value);
    console.log(b.type);
    console.log(b.Placeholder="kolamande");
    // getAttributes
    console.log(b.getAttribute("type"));
    console.log(b.getAttribute("placeholder"));
    // setAttributes
    console.log(b.setAttribute("placeholder","password"));
    console.log(b.setAttribute("type","password"));
}
{
    console.log("///////////////////////////////////");
    const a=document.querySelector("a")
    console.log(a);
    console.log(a.href="https://youtube.com"); 
    console.log(a.getAttribute("href")); 
    console.log(a.setAttribute("a-two","href"));
    console.log(a.setAttribute("attrName","value"));
    const b=document.querySelector("a-two")
    console.log(b);
    console.log(b.href);

}