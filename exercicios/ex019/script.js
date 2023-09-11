function clicar(){
    let n1 = Number(window.prompt('Primeiro valor:'))
    let n2 = Number(window.prompt('Segundo valor:'))
    let n3 = Number(window.prompt(`Valores informados: ${n1} e ${n2}.
O que vamos fazer?
[1] Somar
[2] Subtrair
[3] Multiplicar
[4] Dividir`))
    if (n3 == 1) {
        res.innerHTML = `${n1} + ${n2} = <strong>${n1+n2}</strong>`
    } else if (n3 == 2){
        res.innerHTML = `${n1} - ${n2} = <strong>${n1-n2}</strong>`
    }else if (n3 == 3){
        res.innerHTML = `${n1} x ${n2} = <strong>${n1*n2}</strong>`  
    }else if (n3 == 4){
        res.innerHTML = `${n1} / ${n2} = <strong>${n1/n2}</strong>`
    }else {
        res.innerHTML = ``
    }
}