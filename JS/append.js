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