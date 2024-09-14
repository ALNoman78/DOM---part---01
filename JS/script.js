// console.log(document.body)

//  using get element by tag name

// let liCollection = document.getElementsByTagName("li")
// for (const li of liCollection) {
//     console.log(li.innerText);
// }
// console.log(liCollection);


// using get element by id

const sectionId = document.getElementById("cities")
// for (const ul of sectionId) {
//     console.log(ul);
// }
// console.log(sectionId.innerText);

const destinationTitle = document.getElementById("places")
// console.log(destinationTitle.innerHTML);



// const liElements = document.getElementsByClassName("code-elements")
// for (const item of liElements) {
//     console.log(item);
// }

// console.log(liElements);
// if i want to change a title by javaScript using DOM

const changeElement = document.getElementById("change-Name")
changeElement.innerText = "Replace by Inner Text using javaScript"
changeElement.style.color = "black"
changeElement.style.fontSize = "50px"


//  using query selector

const liItems = document.querySelectorAll(".code-elements")
for (const e of liItems) {
    // console.log(e.innerText);
}
console.log(liItems);


// option - 01 = getElementByID (most use case)
// option - 02 = getElementsByClassName ( most use case)
// option - 03 = getElementByTagName ()
// option - 04 = querySelectorAll ( most use case)
// option - 05 = querySelector ()


const selectorArr = document.getElementById("parent")
// selectorArr.getAttribute("class")
// const selectorArr = document.getElementsByClassName("fruits-container")[0]
// selectorArr.innerHTML = "<h2>Change full context using DOM</h2>"
// console.log(selectorArr.classList);