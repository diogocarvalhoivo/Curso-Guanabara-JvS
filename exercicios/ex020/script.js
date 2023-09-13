let vetor =[]
let res = document.querySelector('#res')

function adicionar(){
    let num = Number(document.querySelector('#num').value)
    let i=0
    if (num>100 || num<1){
        
    } else{
        for (let c=0; c<vetor.length; c++){
            if (vetor[c]==num){
                i = 1
            }
        }
        if (i==1){
            window.alert(`Número já usado`)
        } else{
            vetor.push(num)
            let tab = document.querySelector('#selquadro')
            let item = document.createElement('option') /*cria um option*/
            item.text = `Valor ${num} adicionado` /*informa o q será escrito no option*/
            item.value = `${num}` /*valores a serem gravados para enviar para um banco de dados*/
            tab.appendChild(item) /*cria o option dentro de tab, que é referente ao elemento select do html */
            res.innerHTML= ``
            if (res.innerHTML != ``){
                res.innerHTML= ``
            }
        }  
    }      
}

function finalizar(){
    function sortfunction(a,b){
        return a-b
    }
    vetor.sort(sortfunction)
    let maior = vetor[vetor.length-1]
    let menor = vetor[0]
    let soma=0
    for (let c=0; c<vetor.length; c++){
        soma+=vetor[c]
    }
    let media = soma/vetor.length
    res.innerHTML =`Ao todo, temos ${vetor.length} números cadastrados.<br>
    O maior valor informado foi ${maior}<br>
    O menor valor informado foi ${menor}<br>
    Somando todos o valores, temos ${soma}<br>
    A média dos valores digitados é ${media}.`
}