var jogador = null

var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

function escQuad(id) {
    var quadrado = document.getElementById(id)
    quadrado.innerHTML = jogador
    quadrado.style.color = 'black'
}
function mudarJogador(params) {
    
}