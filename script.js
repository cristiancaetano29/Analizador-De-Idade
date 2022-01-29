/* 
//FUNÇÃO STATICA
function GerarIdade(){
    let idade = Number(window.document.querySelector('input#txtIdad').value)
    let dataAtual = new Date()
    let ano = dataAtual.getFullYear()
    let resultado = window.document.querySelector('div#res')

    if(idade == 0 || idade > ano){
        window.alert('Verifique Sua idade, algo está errado')
    }
    else{
        let formSex = window.document.getElementsByName('radSex')
        let conta = (ano - idade)
        let img = document.createElement('img')

        img.setAttribute('id', 'imagem')
        let genero = ''

        if(formSex[0].checked){
            genero = 'Homem'
            if(conta >= 0 && conta < 12){
                //Criança
                img.setAttribute('src','imagens/meninoPequeno.png' )
            }
            else if(conta < 21){
                //Jovem
                img.setAttribute('src','imagens/homemJovem.png' )
            }
            else if(conta < 50){
                //Adulto
                img.setAttribute('src','imagens/homemAdulto.png' )
            }
            else{
                //Idoso
                img.setAttribute('src','imagens/homemIdoso.png' )
            }
        }
        else{
            genero = 'Mulher'
            if(conta >= 0 && conta < 12){
                //Criança
                img.setAttribute('src','imagens/meninaPequeno.png' )
            }
            else if(conta < 21){
                //Jovem
                img.setAttribute('src','imagens/mulherJovem.png' )
            }
            else if(conta < 50){
                //Adulto
                img.setAttribute('src','imagens/mulherAdulta.png' )
            }
            else{
                //Idoso
                img.setAttribute('src','imagens/mulherIdosa.png' )
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerText = `Detectamos um(a) ${genero} com ${conta} anos`
        resultado.appendChild(img)
    }
}*/

//Função Anonima
let GerarIdade = function(){

    let idade = Number(window.document.querySelector('input#txtIdad').value)
    let dataAtual = new Date()
    let ano = dataAtual.getFullYear()
    let resultado = window.document.querySelector('div#res')

    if(idade == 0 || idade > ano){
        window.alert('Verifique Sua idade, algo está errado')
    }
    else{
        let formSex = window.document.getElementsByName('radSex')
        let conta = (ano - idade)
        let img = document.createElement('img')

        img.setAttribute('id', 'imagem')
        let genero = ''

        if(formSex[0].checked){
            genero = 'Menino'
            if(conta >= 0 && conta < 12){
                //Criança
                img.setAttribute('src','imagens/meninoPequeno.png' )
            }
            else if(conta < 21){
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src','imagens/homemJovem.png' )
            }
            else if(conta < 50){
                //Adulto
                genero = 'Adulto'
                img.setAttribute('src','imagens/homemAdulto.png' )
            }
            else{
                //Idoso
                genero = 'Idoso'
                img.setAttribute('src','imagens/homemIdoso.png' )
            }
        }
        else{
            genero = 'Menina'
            if(conta >= 0 && conta < 12){
                //Criança
                img.setAttribute('src','imagens/meninaPequeno.png' )
            }
            else if(conta < 21){
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src','imagens/mulherJovem.png' )
            }
            else if(conta < 50){
                //Adulto
                genero = 'Mulher'
                img.setAttribute('src','imagens/mulherAdulta.png' )
            }
            else{
                //Idoso
                genero = 'Idosa'
                img.setAttribute('src','imagens/mulherIdosa.png' )
            }
        }
        //resultado.innerText = `Detectamos um(a) ${genero} com ${conta} anos`
        resultado.innerText = `Você é um ${genero} com Idade = ${conta} anos!!!`
        resultado.appendChild(img)
        resultado.style.textAlign = 'center'
    }

    //ARROW FUNCTION
    /*
    let GerarIdade = () => {

        let idade = Number(window.document.querySelector('input#txtIdad').value)
        let dataAtual = new Date()
        let ano = dataAtual.getFullYear()
        let resultado = window.document.querySelector('div#res')
    
        if(idade == 0 || idade > ano){
            window.alert('Verifique Sua idade, algo está errado')
        }
        else{
            let formSex = window.document.getElementsByName('radSex')
            let conta = (ano - idade)
            let img = document.createElement('img')
    
            img.setAttribute('id', 'imagem')
            let genero = ''
    
            if(formSex[0].checked){
                genero = 'Menino'
                if(conta >= 0 && conta < 12){
                    //Criança
                    img.setAttribute('src','imagens/meninoPequeno.png' )
                }
                else if(conta < 21){
                    //Jovem
                    genero = 'Jovem'
                    img.setAttribute('src','imagens/homemJovem.png' )
                }
                else if(conta < 50){
                    //Adulto
                    genero = 'Adulto'
                    img.setAttribute('src','imagens/homemAdulto.png' )
                }
                else{
                    //Idoso
                    genero = 'Idoso'
                    img.setAttribute('src','imagens/homemIdoso.png' )
                }
            }
            else{
                genero = 'Menina'
                if(conta >= 0 && conta < 12){
                    //Criança
                    img.setAttribute('src','imagens/meninaPequeno.png' )
                }
                else if(conta < 21){
                    //Jovem
                    genero = 'Jovem'
                    img.setAttribute('src','imagens/mulherJovem.png' )
                }
                else if(conta < 50){
                    //Adulto
                    genero = 'Mulher'
                    img.setAttribute('src','imagens/mulherAdulta.png' )
                }
                else{
                    //Idoso
                    genero = 'Idosa'
                    img.setAttribute('src','imagens/mulherIdosa.png' )
                }
            }
            //resultado.innerText = `Detectamos um(a) ${genero} com ${conta} anos`
            resultado.innerText = `Você é um ${genero} com Idade = ${conta} anos!!!`
            resultado.appendChild(img)
            resultado.style.textAlign = 'center'
        }   
    }*/
}
