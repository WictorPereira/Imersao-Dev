function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')
    var linkTrailer = document.getElementById('trailer').value

   elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML +` <a href="${linkTrailer}"> <img src = ${filmeFavorito}></a>` 
   document.getElementById('filme').value = ''
   document.getElementById('trailer').value = ''
}



