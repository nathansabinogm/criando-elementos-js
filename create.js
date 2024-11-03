
var btn = document.querySelector("button")
var btn2 = document.querySelector("button")

btn.onclick = (e) => {
    e.preventDefault()
    
    const lista = document.querySelector("#lista");
    const listItem = document.querySelector("li");
    listItem.innerText = 'novo item +'
    lista.appendChild(listItem)
}

   btn2.onclick = (e) => {
    e.preventDefault()
    
    const lista = document.querySelector("#lista");
    const listItem = document.querySelector("li");
    listItem.innerText = 'novo item +'
    lista.appendChild(listItem)
}
