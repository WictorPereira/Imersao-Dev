var listaFilmes = []
listaFilmes[0] = 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/af/La_vita_%C3%A8_bella.jpg/200px-La_vita_%C3%A8_bella.jpg'
listaFilmes[1] = 'https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg'
listaFilmes[2]= 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg'
listaFilmes[3]='https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w'
listaFilmes[4] ='https://br.web.img2.acsta.net/pictures/16/01/18/18/57/082205.jpg'
listaFilmes[5] ='https://m.media-amazon.com/images/S/pv-target-images/5557055455d833454a02486f8cf10d3ddbe105de08ca76fa8c72cf2f92ef8879.jpg'
listaFilmes[6] ='https://m.media-amazon.com/images/I/71gODmRKtdL._AC_UF1000,1000_QL80_.jpg'

var listaNomes = []
listaNomes[0] = 'A vida e Bela'
listaNomes[1] = 'A Chegada'
listaNomes[2] = 'Homen Aranha no Aranhaverso'
listaNomes[3] = 'Interstellar'
listaNomes[4] = 'Perdido em Marte'
listaNomes[5] = 'O Resgate Do Soldado Ryan'
listaNomes[6] = 'Fuga de Alcatraz'

for (let index = 0; index < listaFilmes.length; index++) {
    document.write(`<img src = ${listaFilmes[index]}> `)  
    document.write(`<h4> ${listaNomes[index]} </h4>`)  
    
}



