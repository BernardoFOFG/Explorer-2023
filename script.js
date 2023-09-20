function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")
    img.setAttribute("src", "./assets/avatar.jpeg")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.classList.add('light')
    } else {
        img.classList.remove('light')
    }
}