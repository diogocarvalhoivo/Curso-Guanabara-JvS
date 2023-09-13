let vetor =[]
let res = document.querySelector('#res')

function adicionar(){
    let num = document.querySelector('#num')
    let i=0
    if (Number(num.value)>100 || Number(num.value)<1){
        
    } else{
        for (let c=0; c<vetor.length; c++){
            if (vetor[c]==Number(num.value)){
                i = 1
            }
        }
        if (i==1){
            window.alert(`Número já usado`)
        } else{
            vetor.push(Number(num.value))
            let tab = document.querySelector('#selquadro')
            let item = document.createElement('option') /*cria um option*/
            item.text = `Valor ${Number(num.value)} adicionado` /*informa o q será escrito no option*/
            tab.appendChild(item) /*cria o option dentro de tab, que é referente ao elemento select do html */
            num.value = '' /*APAGAR O INPUT*/
            num.focus() /*FOCAR NA CAIXA NO INPUT*/
            res.innerHTML= ``
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
    res.innerHTML =`<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
    res.innerHTML +=`<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML +=`<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML +=`<p>Somando todos o valores, temos ${soma}</p>`
    res.innerHTML +=`<p>A média dos valores digitados é ${media}.</p>`
}