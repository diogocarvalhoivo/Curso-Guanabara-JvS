let vetor =[]

function adicionar(){
    let num = Number(document.querySelector('#num').value)
    let res = document.querySelector('#res')
    
    if (num>100 || num<1){
        
    } else{
        for (let c=0; c<vetor.length+1; c++){
            if (vetor[c]==num){

            } else{
                vetor.push(num)

                let tab = document.querySelector('#selquadro')
                let item = document.createElement('option') /*cria um option*/
                item.text = `Valor ${num} adicionado` /*informa o q será escrito no option*/
                item.value = `${num}` /*valores a serem gravados para enviar para um banco de dados*/
                tab.appendChild(item) /*cria o option dentro de tab, que é referente ao elemento select do html */
        
                
                res.innerHTML=`${vetor}`
            }
        }  
    }
}