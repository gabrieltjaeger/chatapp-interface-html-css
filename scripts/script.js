let botaoConversas = document.getElementById("botao-conversas");
let botaoStatus = document.getElementById("botao-status");
let botaoChamadas = document.getElementById("botao-chamadas");

const listaBotoes = [botaoConversas, botaoStatus, botaoChamadas];


botaoConversas.addEventListener("click", function(){
    deselecionarOutros();
    botaoConversas.classList.add('selecionado');
    irParaPosicao('conversas');
});

botaoStatus.addEventListener('click', function(){
    deselecionarOutros();
    botaoStatus.classList.add('selecionado');
    irParaPosicao('status');
});

botaoChamadas.addEventListener('click', function(){
    deselecionarOutros();
    botaoChamadas.classList.add('selecionado');
    irParaPosicao('chamadas');
});

function irParaPosicao(id){    
    window.location.href = "#"+id
    console.log(window.location)
    window.scroll({top:0});
}

function deselecionarOutros() {
    for(i = 0; i < listaBotoes.length; i++){
        if (listaBotoes[i].classList.contains("selecionado")) {
            listaBotoes[i].classList.remove("selecionado");
        }
    }
}
