inicio=3
fim=35
passo=3
msg=`${inicio}`

if(inicio > fim){
    console.log(`[ERROR] Valor do início maior que do fim, informe novos valores!`)
} else {
    while(inicio + passo <= fim) {
        inter = ` &#128073; ${inicio + passo}`
        msg = msg + inter 
        inicio = inicio + passo
    }
    console.log(`${msg} &#65039;`)
}