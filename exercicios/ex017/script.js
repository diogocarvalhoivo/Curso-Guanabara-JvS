function clicar(){
    document.querySelector('#res')
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.floor(min + Math.random()*dif)

    res.innerHTML += `<p>Acabei de pensar no número: <span style="background-color: yellow;">${aleatorio}</span>!</p>`
}

function limpar(){
    res.innerHTML = ``
}