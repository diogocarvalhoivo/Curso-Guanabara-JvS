let i=0
let num = 3
let vetor=[1,12]

if (num>100 || num<1){
    
} else{
    for (let c=0; c<vetor.length; c++){
        if (vetor[c]==num){
            i = 1
        }
    }
    if (i==1){

    } else{
        vetor.push(num)
    }  
}

function sortfunction(a,b){
    return (a-b)
}

vetor.sort(sortfunction)
let maior = vetor[vetor.length-1]
let menor = vetor[0]
let soma=0
for (let c=0; c<vetor.length; c++){
    soma+=vetor[c]
}
let media = soma/vetor.length