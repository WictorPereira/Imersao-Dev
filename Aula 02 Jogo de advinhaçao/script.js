var numeroSecreto = parseInt(Math.random() * 1001)

function jogo() {
    var chute = prompt('Digite um numero entre 0 e 1000:')
    if(chute === null){
         // Caso o usuário cancele, não faz nada
        return;
    }

    chute =parseInt(chute)

if (chute == numeroSecreto) {
    alert(`Voce acertou parabens o numero e: ${numeroSecreto}`)
} else if (chute < numeroSecreto) {
    alert(`Errou... O numero e maior que ${chute}. Tente novamente`)
    jogo()
} else if (chute > numeroSecreto){
    alert(`Errou... O numero e menor que ${chute}.. Tente novamente`)
    jogo()
}

}
jogo()