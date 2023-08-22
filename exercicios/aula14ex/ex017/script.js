function clicar() {
    let num = document.querySelector('#num')
    let tab = document.querySelector('#seltab')
    num = Number(num.value)
    if (num == 0){
        window.alert('Porfavor, digite um número!')
    } else {
        tab.innerHTML = '' /* Limpar o select da tabuada, não acumular resultados */
        for ( let c = 1; c <= 10; c++){
            let item = document.createElement('option') /*cria um option*/
            item.text = `${num} x ${c} = ${num*c}` /*informa o q será escrito no option*/
            item.value = `tab${c}` /*valores a serem gravados para enviar para um banco de dados*/
            tab.appendChild(item) /*cria o option dentro de tab, que é referente ao elemento select do html */
        }
        /*let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }*/
    }
}  