let jogador = {
    nome: 'Renato Augusto',
    idade: 34,
    numGol: 81,
    gol(g=0){
        console.log('Renato Fez Gol!')
        this.numGol += g 
    }    
}

console.log(jogador.nome)
console.log(jogador.numGol)
jogador.gol()
console.log(jogador.numGol)

jogador.posicao = 'Meio Campo'
console.log(jogador)