let aleatorio = 0
let res = document.querySelector('#res')

function sortear(){    
    let min = 1
    let max = 100
    let dif = max - min
    aleatorio = Math.floor(min + Math.random()*dif)
}

function clicar(){
    let p = Number(window.prompt('Qual o seu palpite?'))
    if (p < aleatorio){
        dica = `MAIOR`
        res.innerHTML += `<p>Você falou o número ${p}. Meu número é <span style="font-weight: bold;">${dica}</span></p>`
    } else if (p > aleatorio){
        dica = `MENOR`
        res.innerHTML += `<p>Você falou o número ${p}. Meu número é <span style="font-weight: bold;">${dica}</span></p>`
    } else{
        res.innerHTML += `<p> <span style="font-weight: bold;">PARABÉNS!</span> Você acertou! Eu tinha sorteado o valor ${p}!</p>`
    }
}
    

