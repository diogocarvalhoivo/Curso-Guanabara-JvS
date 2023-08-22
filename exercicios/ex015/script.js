function clicar(){
    document.querySelector('#res')
    hoje = new Date()
    let dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    data = hoje.getDate()
    mes = meses[hoje.getMonth()]
    ano = hoje.getFullYear()
    dia = dias[hoje.getDay()]
    hora = hoje.getHours()
    min = hoje.getMinutes()
    seg = hoje.getSeconds()
    res.innerHTML = `<p>
                        Dia: <span style="background-color: yellow;">${data}</span>
                    </p>
                    <p>
                        Mês: <span style="background-color: yellow;">${mes}</span>
                    </p>
                    <p>
                        Ano: <span style="background-color: yellow;">${ano}</span>
                    </p>
                    <p>
                        Dia da semana: <span style="background-color: yellow;">${dia}</span>
                    </p>
                    <p>
                        Hora:  <span style="background-color: yellow;">${hora}</span>
                    </p>
                    <p>
                        Minutos: <span style="background-color: yellow;">${min}</span>
                    </p>
                    <p>
                        Segundos: <span style="background-color: yellow;">${seg}</span>
                    </p>`
}