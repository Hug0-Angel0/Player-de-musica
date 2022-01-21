let musicas = [
    {titulo:'Drip de roca', artista:'doode', src:'musicas/DRIP DA ROÇA 2 - Reid, Doode, Wiu, Lil Whind.mp3'
    , img:'imagens/drip de roça.jpg'},
    {titulo:'milionario', artista:'theo', src:'musicas/t h e ô - Milionário 💸.mp3'
    , img:'imagens/milionario.jpg'},
    {titulo:'confortável', artista:'doode, MC PH, MC pedrinho', src:'musicas/Confortável - Doode, MC pedrinho, MC PH.mp3'
    , img:'imagens/confortável.jpg'}
];

let musica = document.querySelector('audio');
let indexmusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarmusica);

document.querySelector('.botao-pause').addEventListener('click', pausarmusica);

musica.addEventListener('timeupdate', atualizarbarra);

document.querySelector('.anteriror').addEventListener('click', () => {
    indexmusica--;
    renderizarmusica(indexmusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexmusica++;
    renderizarmusica(indexmusica);
});

//Funções
function renderizarmusica(){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarmusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';    
}

function pausarmusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';  
}

function atualizarbarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos <10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}