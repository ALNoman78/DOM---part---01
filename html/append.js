// step 1 = where to add

const newList = document.getElementById("new-items")

// step -02

const newEle = document.createElement("li")
newEle.innerText = "about 2"
const e = document.createElement("li")
e.innerText = "new element added"

// step 03 = what to added

newList.append(newEle)
newList.append(e)



// step - 01 

const mainContainer = document.getElementById("main-container")

// step - 02

const section = document.createElement("section")

const h1 = document.createElement("h1")
h1.innerText = "What fruits do i like"
const ul = document.createElement("ul")
const li = document.createElement("li")
li.innerText = "Pizza"
const li2 = document.createElement("li")
li2.innerText = "Burgger"
const li3 = document.createElement("li")
li3.innerText = "NaN"
const li4  = document.createElement ("li")
li4.innerText = "chap"
const li5 = document.createElement ("li")
li5.innerText = "Biriyani"
section.append(h1)
section.appendChild(ul)
ul.appendChild(li)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)

mainContainer.append(section)

// mainContainer.append(section2)


// how to added directly in a section

const sectionDress = document.createElement("section")
sectionDress.innerHTML = `
<h1>Dress section</h1>
<ul>
    <li>Pajama</li>
    <li>Swit Shirt</li>
    <li>T-shirt</li>
    <li>Polo Shirt</li>
</ul>
`
mainContainer.append(sectionDress)