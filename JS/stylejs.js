//      CSS IN JAVASCRIPT


// const sections = document.querySelectorAll("section")  // it will defined tag name when you using . / # 
// for(const section of sections){
//     // console.log(section);
//     section.style.backgroundColor = "gray"
//     section.style.color = "white"
//     section.style.border = "2px solid black"
//     section.style.fontSize  = "30px"
// }

// const sectionStyles = document.querySelector(".fruits-section")
// sectionStyles.style.backgroundColor = "red";

// const sectionFruit = document.getElementById("fruits-section")
// sectionFruit.classList.add("text-center")
// sectionFruit.classList.add("color")
// sectionFruit.style.border = "2px solid red"
// // sectionFruit.classList.remove("text-center") // remove elements 🙂🙂
// sectionFruit.classList.remove("font-size")


// const section = document.querySelector("fruits-section ul")
// console.log(section);

const newLi = document.createElement("li")
newLi.innerText = "this is new li tag"
console.log(newLi);