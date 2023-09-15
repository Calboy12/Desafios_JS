var lamp = window.document.getElementById('lampada')

function estaquebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if (!estaquebrada()){
    lamp.src = 'Imagens.svg/ligada.svg'}
}
function Desligar(){
    if (!estaquebrada()){
    lamp.src = 'Imagens.svg/desligada.svg'} 
}
lamp.addEventListener('click', Quebrar)
function Quebrar(){
    lamp.src = 'Imagens.svg/quebrada.svg'
}