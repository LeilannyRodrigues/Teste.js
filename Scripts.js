// seleção por ID

const content = document.getElementById("content")

console.log("content", content)

content.innerHTML = '<p>frases motivacionais para agradecer por cada etapa da sua vida!</p>'
content.style.backgroundColor = "#F00"
content.style.fontSize = "30px"

// Seleção por classe

const classText = document.getElementsByClassName("text")

console.log("classText", classText)

for(text of classText){
    text.style.color = "#00F"
}

// Seleção por tag

const titles = document.getElementsByTagName("h2")

console.log("titles", titles)

for(title of titles){
    title.style.fontSize = "50px"
}

// query selector

const elementFeature = document.querySelector("#feature")

const newElement = document.createElement("p")

newElement.textContent = `Quem não agradece, não merece mais.`

elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend",`
<div>
    <p>Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!</p>
    </div>`)

    document.body.insertBefore(newElement, elementFeature)
