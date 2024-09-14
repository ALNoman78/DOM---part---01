// console.log(document.body)
let liCollection = document.getElementsByTagName("li")
for (const li of liCollection) {
    console.log(li.innerText);
}
console.log(liCollection);