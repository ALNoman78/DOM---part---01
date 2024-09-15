const mainContainer = document.getElementById("main-container")
console.log(mainContainer);

const sections = document.createElement("section")
sections.innerHTML = `
    <h1> Content Items</h1>
    <ul>
        <li>Home Page</li>
        <li>Contact page</li>
        <li>Loving Page</li>
        <li>Extra Page</li>
        <li>Extra PageMoule</li>
        <li>that's nothing work</li>
    </ul>
`
mainContainer.append(sections)


const child = document.getElementById("chid");
const li = document.createElement("li")
li.innerText = "Product number 5"
child.appendChild(li)

const e = document.getElementById("new-element")
const n = document.createElement("li")
n.innerText = "Last form added"
e.appendChild(n)
n.style.color = "steelblue"
n.style.fontSize = "1.5rem"
n.style.fontWeight = "bold"
n.style.fontFamily = "Poppins"