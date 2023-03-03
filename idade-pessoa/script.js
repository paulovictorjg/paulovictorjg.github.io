function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homen'
            /*(fsex[0].checked && idade>=0 && idade<10){
            genero = 'bebe menino'      fazer mais if para decidir entre bebe e jovem e adulto*/
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src','foto-bebe-m.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }   
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src','foto-bebe-f.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}`
        res.appendChild(img)
    }
}