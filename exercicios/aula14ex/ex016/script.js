function clicar(){
    let inicio = document.getElementById('ini')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')
    

    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)
    let msg = `${inicio}`

    if(inicio > fim){ 
        while(inicio - passo > fim) { /*Contagem descrescente */
            inter = ` &#128073; ${inicio - passo}`
            msg = msg + inter 
            inicio -= passo
        }
        res.innerHTML = `${msg} &#127987;`
    } else {
        while(inicio + passo <= fim) { /*Contagem crescente */
            inter = ` &#128073; ${inicio + passo}`
            msg = msg + inter 
            inicio += passo
        }
        res.innerHTML = `${msg} &#127987;`
    }
}