function clicar(){
    let inicio = document.getElementById('ini')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')
    
    i = Number(inicio.value)
    f = Number(fim.value)
    p = Number(passo.value)

    if (i == 0 || f == 0 || p <= 0){
        res.innerHTML = `Impossível contar` 
    } else {
        res.innerHTML = `Contando: `
        if (i < f){ 
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `&#127987;`
    }
}