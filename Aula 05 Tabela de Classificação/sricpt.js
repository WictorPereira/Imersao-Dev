var paulo = {
    nome:'Paulo',
    vitoria:0,
    empate:0,
    derrota:0,
    pontos:0
}

var wictor = {
    nome:'Wictor',
    vitoria:0,
    empate:0,
    derrota:0,
    pontos:0
} 

var elementoTabela = document.getElementById('tabelaJogadores')
function exibirNaTela(){
   elementoTabela.innerHTML= `
    <tr>
        <td>${paulo.nome}</td>
        <td>${paulo.vitoria}</td>
        <td>${paulo.empate}</td>
        <td>${paulo.derrota}</td>
        <td>${paulo.pontos}</td>
        <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
        <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
    </tr> 
    <tr>
        <td>${wictor.nome}</td>
        <td>${wictor.vitoria}</td>
        <td>${wictor.empate}</td>
        <td>${wictor.derrota}</td>
        <td>${wictor.pontos}</td>
        <td><button onClick="adicionarVitoria(wictor)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(wictor)">Empate</button></td>
        <td><button onClick="adicionarDerrota(wictor)">Derrota</button></td>
    </tr> 
`
}
exibirNaTela()

function adicionarVitoria(jogador){
   jogador.vitoria++
   jogador.pontos = jogador.pontos + 3
   exibirNaTela()
}

function adicionarEmpate(jogador){
   jogador.empate ++
   jogador.pontos ++
   exibirNaTela()
}

function adicionarDerrota(jogador){
    jogador.derrota ++
    exibirNaTela()

}


