
function fatorial() {
    let res = document.querySelector('#res')
    let n = Number(document.querySelector('#num').value)

    res.innerHTML += `<h2>Calculando ${n}!</h2>`
    let fat = 1
    for (let i = 1; i < n; i++){
        res.innerHTML += `${n-i+1} x  `
        fat *= n-i+1
    }
    res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')} </strong>`
}