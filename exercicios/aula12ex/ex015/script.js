function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value >ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero= 'Homem'
            if (idade>=0 && idade < 10){
                /*Criança*/
                img.setAttribute('src', 'hcrianca')
            } else if(idade < 21){
                /*jovem*/
                img.setAttribute('src', 'hjovem')
            } else if(idade < 50){
                /*adulto*/
                img.setAttribute('src', 'hadutlo')
            }else {
                /*Idoso*/
                img.setAttribute('src', 'hidoso')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade>=0 && idade < 10){
                /*Criança*/
                img.setAttribute('src', 'fcrianca')
            } else if(idade < 21){
                /*jovem*/
                img.setAttribute('src', 'fjovem')
            } else if(idade < 50){
                /*adulto*/
                img.setAttribute('src', 'fadulto')
            }else {
                /*Idoso*/
                img.setAttribute('src', 'fidoso')
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

    
}
