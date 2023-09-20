const pet = document.getElementById('pet');
const alimentarButton = document.getElementById('alimentar');
const brincarButton = document.getElementById('brincar');
const dormirButton = document.getElementById('dormir');
const banhoButton = document.getElementById('banho');
const medicarButton = document.getElementById('medicar');
const espancarButton = document.getElementById('espancar');
const suicidiobutton = document.getElementById('suicidio');
const cheatButton = document.getElementById('cheat');
const menos = document.getElementById('menos');

cheatButton.addEventListener('click', function () {
    pontos = pontos + 100;
    atualizarPontos();
});

menos.addEventListener('click', function () {
    pontos = pontos - 100;
    atualizarPontos();
});

const progressFome = document.getElementById('progress');
const progressSono = document.getElementById('progress-sono');
const progressAmor = document.getElementById('progress-amor');
const progressSaude = document.getElementById('progress-saude');
const progressBanho = document.getElementById('progress-banho');

const audioAlimentar = document.getElementById('audio-alimentar');
const audioBrincar = document.getElementById('audio-brincar');
const audioDormir = document.getElementById('audio-dormir');
const audioBanho = document.getElementById('audio-banho');
const audioMedicar = document.getElementById('audio-medicar');
const audioEspancar = document.getElementById('audio-espancar');
const audioSuicidio = document.getElementById('audio-suicidio');
const audioinicial = document.getElementById('audio-inicio');

const loja = document.getElementById('loja');
const petcontainer = document.getElementById('pet-container');
const lojacontainer = document.getElementById('loja-container');
const voltar = document.getElementById('voltar');

const removechapeu = document.getElementById('chapeu-0');
const chapeu1 = document.getElementById('chapeu-1');
const chapeu2 = document.getElementById('chapeu-2');
const chapeu3 = document.getElementById('chapeu-3');
const chapeu4 = document.getElementById('chapeu-4');
const chapeu5 = document.getElementById('chapeu-5');
const chapeu6 = document.getElementById('chapeu-6');
const chapeu7 = document.getElementById('chapeu-7');
const chapeu8 = document.getElementById('chapeu-8');
const chapeu9 = document.getElementById('chapeu-9');
const chapeu10 = document.getElementById('chapeu-10');

const sapato = document.getElementById('sapato')
const sapato0 = document.getElementById('sapato-0');
const sapato1 = document.getElementById('sapato-1');
const sapato2 = document.getElementById('sapato-2');
const sapato3 = document.getElementById('sapato-3');
const sapato4 = document.getElementById('sapato-4');
const sapato5 = document.getElementById('sapato-5');
const sapato6 = document.getElementById('sapato-6');
const sapato7 = document.getElementById('sapato-7');
const sapato8 = document.getElementById('sapato-8');
const sapato9 = document.getElementById('sapato-9');
const sapato10 = document.getElementById('sapato-10');

const petHat = document.getElementById('hat');
const petall = document.getElementById('pet-top');


const fundo1 = document.getElementById('fundo-1');
const fundo2 = document.getElementById('fundo-2');
const fundo3 = document.getElementById('fundo-3');
const fundo4 = document.getElementById('fundo-4');
const fundo5 = document.getElementById('fundo-5');
const fundo6 = document.getElementById('fundo-6');
const fundo7 = document.getElementById('fundo-7');
const fundo8 = document.getElementById('fundo-8');
const fundo9 = document.getElementById('fundo-9');
const fundo10 = document.getElementById('fundo-10');

const acessorio = document.getElementById('acessorio');
const acessorio0 = document.getElementById('acessorio-0');
const acessorio1 = document.getElementById('acessorio-1');
const acessorio2 = document.getElementById('acessorio-2');
const acessorio3 = document.getElementById('acessorio-3');
const acessorio4 = document.getElementById('acessorio-4');
const acessorio5 = document.getElementById('acessorio-5');
const acessorio6 = document.getElementById('acessorio-6');
const acessorio7 = document.getElementById('acessorio-7');
const acessorio8 = document.getElementById('acessorio-8');
const acessorio9 = document.getElementById('acessorio-9');
const acessorio10 = document.getElementById('acessorio-10');

const asas = document.getElementById('asas');
const asas0 = document.getElementById('asas-0');
const asas1 = document.getElementById('asas-1');
const asas2 = document.getElementById('asas-2');
const asas3 = document.getElementById('asas-3');
const asas4 = document.getElementById('asas-4');
const asas5 = document.getElementById('asas-5');
const asas6 = document.getElementById('asas-6');
const asas7 = document.getElementById('asas-7');
const asas8 = document.getElementById('asas-8');
const asas9 = document.getElementById('asas-9');
const asas10 = document.getElementById('asas-10');

const lana = document.getElementById('lana');
const audiolana = document.getElementById('audio-lana');
const tyler = document.getElementById('tyler');


// loja //

function lojaitens(){
    if(pontos > 0){
        removechapeu.disabled = false;
        acessorio0.disabled = false;
        asas0.disabled = false;
        sapato0.disabled = false;
    }
    if(pontos > 40){
        fundo2.disabled = false;
        chapeu1.disabled = false;   
    }

    if(pontos > 50){
        chapeu2.disabled = false;
        fundo3.disabled = false;
    }
    if(pontos > 100){
        chapeu3.disabled = false;
        fundo4.disabled = false;
    }
    if(pontos > 150){
        chapeu4.disabled = false;
        chapeu5.disabled = false;
        fundo5.disabled = false;
        sapato1.disabled = false;
    }
    if(pontos > 170){
        acessorio1.disabled = false;
        chapeu6.disabled = false;
        fundo6.disabled = false;
        sapato2.disabled = false;
    }
    if(pontos > 200){
        asas1.disabled = false;
        acessorio2.disabled = false;
        sapato3.disabled = false;
        chapeu7.disabled = false;
        
    }
    if(pontos > 250){
        sapato4.disabled = false;
    }
    if(pontos > 300){
        asas2.disabled = false;
        chapeu8.disabled = false;
    }
    if(pontos > 350){
        acessorio3.disabled = false;        
        fundo7.disabled = false;
        sapato5.disabled = false;

    }
    if(pontos > 400){
        asas3.disabled = false;        
        fundo8.disabled = false;
        sapato6.disabled = false;

    }
    if(pontos > 500){
        fundo9.disabled = false;
        asas4.disabled = false;
        sapato7.disabled = false;
        acessorio4.disabled = false;
        chapeu9.disabled = false;
    }
    if(pontos > 600){
        fundo10.disabled = false;
        asas5.disabled = false;
        sapato8.disabled = false;
        acessorio5.disabled = false;
    }
    if(pontos > 700){
        asas6.disabled = false;
        sapato9.disabled = false;
        acessorio6.disabled = false;
    }
    if(pontos > 750){
        asas7.disabled = false;
        sapato10.disabled = false;
        acessorio7.disabled = false;
    }
    if(pontos > 800){
        asas8.disabled = false;
        acessorio8.disabled = false;
        chapeu10.disabled = false;
    }
    if(pontos > 850){
        asas9.disabled = false;
        acessorio9.disabled = false;

    }
    if(pontos > 900){
        asas10.disabled = false;
    }
    if(pontos > 1000){
        acessorio10.disabled = false;
    }


}

const buttons = document.querySelectorAll('.botaoloja');

buttons.forEach((button) => {
  if (button.hasAttribute('disabled')) {
    const buttonText = button.textContent;
    const buttonValue = button.getAttribute('value');
    const overlay = document.createElement('div');
    overlay.className = 'button-overlay';
    button.appendChild(overlay);
  }
});


let pontos = 0;
let chapeuSelecionado = '';
let fundoSelecionado = '';
let sapatoSelecionado = '';
let acessorioSelecionado = '';
let asasSelecionado = '';


function verificarRequisitos() {
    if (fome <= 50 && sono >= 50 && amor >= 50 && saude >= 50 && banho >= 50 && !acaoEmAndamento) {
        pontos++;
        atualizarPontos();
    }
}


function atualizarPontos() {
    const pontosElement = document.getElementById('pontos');
    pontosElement.textContent = pontos; 
}

function salvarPontos() {
    localStorage.setItem('pontos', pontos);
}

function salvarfundo() {
    localStorage.setItem('fundo', fundoSelecionado  );
}

function carregarPontos() {
    const pontosSalvos = localStorage.getItem('pontos');
    if (pontosSalvos !== null) {
        pontos = parseInt(pontosSalvos);
        atualizarPontos();
    }

    const chapeuSalvo = localStorage.getItem('chapeu');
    if (chapeuSalvo !== null) {
        chapeuSelecionado = chapeuSalvo;
        petHat.src = chapeuSalvo;
        petHat.style.display = 'block';
    }

    const fundoSalvo = localStorage.getItem('fundo');
    if (fundoSalvo !== null) {
        fundoSelecionado = fundoSalvo;
        setFundo(fundoSalvo);
    }

    const sapatoSalvo = localStorage.getItem('sapato');
    if (sapatoSalvo !== null) {
        sapatoSelecionado = sapatoSalvo;
        sapato.src = sapatoSalvo;
        sapato.style.display = 'block';
    }

    const acessorioSalvo = localStorage.getItem('acessorio');
    if (acessorioSalvo !== null) {
        acessorioSelecionado = acessorioSalvo;
        acessorio.src = acessorioSalvo;
        acessorio.style.display = 'block';
    }

    const asasSalvo = localStorage.getItem('asas');
    if (asasSalvo !== null) {
        asasSelecionado = asasSalvo;
        asas.src = asasSalvo;
        asas.style.display = 'block';
    }
}

carregarPontos();

atualizarPontos();

audioinicial.play();

let acaoEmAndamento = false;

let fome = 30; 
let amor = 50;
let sono = 20;
let saude = 40;
let banho = 100;

function setFundo(classeFundo) {
    document.body.classList.remove('fundo1');
    document.body.classList.remove('fundo2');
    document.body.classList.remove('fundo3');
    document.body.classList.remove('fundo4');
    document.body.classList.remove('fundo5');
    document.body.classList.remove('fundo6');
    document.body.classList.remove('fundo7');
    document.body.classList.remove('fundo8');
    document.body.classList.remove('fundo9');
    document.body.classList.remove('fundo10');
    document.body.classList.add(classeFundo);

}

removechapeu.addEventListener('click', function () {
    petHat.src = './chapeus/nenhum.png';
});

chapeu1.addEventListener('click', function () {
    petHat.src = './chapeus/hat1.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat1.png';
    localStorage.setItem('chapeu', chapeuSelecionado);
    removeeaster();
});

chapeu2.addEventListener('click', function () {
    petHat.src = './chapeus/hat2.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat2.png'; 
    localStorage.setItem('chapeu', chapeuSelecionado);
    removeeaster();
});

chapeu3.addEventListener('click', function () {
    petHat.src = './chapeus/hat3.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat3.png'; 
    localStorage.setItem('chapeu', chapeuSelecionado);
    removeeaster();
});

chapeu4.addEventListener('click', function () {
    petHat.src = './chapeus/hat4.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat4.png'; 
    localStorage.setItem('chapeu', chapeuSelecionado);
    removeeaster();
});

chapeu5.addEventListener('click', function () {
    petHat.src = './chapeus/hat5.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat5.png'; 
    localStorage.setItem('chapeu', chapeuSelecionado);
    removeeaster();
});

chapeu6.addEventListener('click', function () {
    petHat.src = './chapeus/hat6.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat6.png';
    localStorage.setItem('chapeu', chapeuSelecionado);
    removeeaster();
});

fundo1.addEventListener('click', function () {
    setFundo('fundo1');
    removeeaster();
    fundoSelecionado = 'fundo1';
    salvarfundo();
});

fundo2.addEventListener('click', function () {
    setFundo('fundo2');
    removeeaster();
    fundoSelecionado = 'fundo2';
    salvarfundo();
});

fundo3.addEventListener('click', function () {
    setFundo('fundo3');
    removeeaster()
    tyler.style.display = 'block';
    fundoSelecionado = 'fundo3';
    salvarfundo();

});

fundo4.addEventListener('click', function () {
    setFundo('fundo4');
    removeeaster()
    fundoSelecionado = 'fundo4';
    salvarfundo();
});

fundo5.addEventListener('click', function () {
    setFundo('fundo5');
    removeeaster()
    fundoSelecionado = 'fundo5';
    salvarfundo();
});

fundo6.addEventListener('click', function () {
    setFundo('fundo6');
    removeeaster()
    fundoSelecionado = 'fundo6';
    salvarfundo();
});

fundo7.addEventListener('click', function () {
    setFundo('fundo7');
    removeeaster()
    fundoSelecionado = 'fundo7';
    salvarfundo();
});

fundo8.addEventListener('click', function () {
    setFundo('fundo8');
    removeeaster()
    fundoSelecionado = 'fundo8';
    salvarfundo();
});

fundo9.addEventListener('click', function () {
    setFundo('fundo9');
    removeeaster()
    fundoSelecionado = 'fundo9';
    salvarfundo();
});

fundo10.addEventListener('click', function () {
    setFundo('fundo10');
    removeeaster()
    fundoSelecionado = 'fundo10';
    salvarfundo();
});

sapato0.addEventListener('click', function () {
    sapato.src = './sapatos/nenhum.png';
    sapato.style.display = 'none';
    sapatoSelecionado = './sapatos/nenhum.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato1.addEventListener('click', function () {
    sapato.src = './sapatos/sapato1.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato1.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato2.addEventListener('click', function () {
    sapato.src = './sapatos/sapato2.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato2.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato3.addEventListener('click', function () {
    sapato.src = './sapatos/sapato3.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato3.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato4.addEventListener('click', function () {
    sapato.src = './sapatos/sapato4.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato4.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato5.addEventListener('click', function () {
    sapato.src = './sapatos/sapato5.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato5.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato6.addEventListener('click', function () {
    sapato.src = './sapatos/sapato6.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato6.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato7.addEventListener('click', function () {
    sapato.src = './sapatos/sapato7.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato7.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato8.addEventListener('click', function () {
    sapato.src = './sapatos/sapato8.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato8.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato9.addEventListener('click', function () {
    sapato.src = './sapatos/sapato9.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato9.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

sapato10.addEventListener('click', function () {
    sapato.src = './sapatos/sapato10.png';
    sapato.style.display = 'block';
    sapatoSelecionado = './sapatos/sapato10.png';
    localStorage.setItem('sapato', sapatoSelecionado);
    removeeaster();
});

acessorio0.addEventListener('click', function () {
    acessorio.src = './acessorios/nenhum.png';
    acessorio.style.display = 'none';
    acessorioSelecionado = './acessorios/nenhum.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio1.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio1.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio1.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio2.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio2.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio2.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio3.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio3.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio3.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio4.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio4.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio4.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio5.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio5.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio5.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio6.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio6.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio6.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio7.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio7.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio7.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio8.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio8.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio8.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio9.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio9.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio9.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

acessorio10.addEventListener('click', function () {
    acessorio.src = './acessorios/acessorio10.png';
    acessorio.style.display = 'block';
    acessorioSelecionado = './acessorios/acessorio10.png';
    localStorage.setItem('acessorio', acessorioSelecionado);
    removeeaster();
});

asas0.addEventListener('click', function () {
    asas.src = './asas/nenhum.png';
    asas.style.display = 'none';
    asasSelecionado = './asas/nenhum.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas1.addEventListener('click', function () {
    asas.src = './asas/asas1.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas1.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas2.addEventListener('click', function () {
    asas.src = './asas/asas2.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas2.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas3.addEventListener('click', function () {
    asas.src = './asas/asas3.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas3.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas4.addEventListener('click', function () {
    asas.src = './asas/asas4.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas4.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas5.addEventListener('click', function () {
    asas.src = './asas/asas5.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas5.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas6.addEventListener('click', function () {
    asas.src = './asas/asas6.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas6.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas7.addEventListener('click', function () {
    asas.src = './asas/asas7.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas7.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas8.addEventListener('click', function () {
    asas.src = './asas/asas8.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas8.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas9.addEventListener('click', function () {
    asas.src = './asas/asas9.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas9.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});

asas10.addEventListener('click', function () {
    asas.src = './asas/asas10.png';
    asas.style.display = 'block';
    asasSelecionado = './asas/asas10.png';
    localStorage.setItem('asas', asasSelecionado);
    removeeaster();
});


acessorio.addEventListener('click', function () {
    acessorio.classList.add('jump');
    setTimeout(function () {
        acessorio.classList.remove('jump');
    }
    , 500); 
});







function eastereggs(){
    if(fundoSelecionado == 'fundo4'){
        document.getElementById('lana').style.display = 'inline-block';
    }
    if(fundoSelecionado == 'fundo3'){
        document.getElementById('tyler').style.display = 'inline-block';
    }
    if(chapeuSelecionado == './chapeus/hat6.png'){
        document.getElementById('suicidio').style.display = 'inline-block';
    }
}

function desabilitabotao(){
    alimentarButton.disabled = true;
    brincarButton.disabled = true;
    dormirButton.disabled = true;
    banhoButton.disabled = true;
    medicarButton.disabled = true;
    espancarButton.disabled = true;
    suicidiobutton.disabled = true;
}

function habilitabotao(){
    alimentarButton.disabled = false;
    brincarButton.disabled = false;
    dormirButton.disabled = false;
    banhoButton.disabled = false;
    medicarButton.disabled = false;
    espancarButton.disabled = false;
    suicidiobutton.disabled = false;
}


function atualizarFome() {
    if (fome > 0) {
        fome -= 10;
        fome = Math.max(fome, 0); 
        atualizarProgressBar(progressFome, fome);
        atualizarExpressaoPet();
    }
}

function atualizarAmor() {
    if (amor < 100) {
        acaoEmAndamento = true;
        amor += 15;
        amor = Math.min(amor, 100);
        atualizarProgressBar(progressAmor, amor);
        petall.classList.add('jump');
        desabilitabotao();
        setTimeout(function () {
            petall.classList.remove('jump');
            acaoEmAndamento = false;
            habilitabotao();
        }, 500);
    }
}

function atualizarSaude() {
    if (saude < 100) {
        acaoEmAndamento = true;
        atualizarProgressBar(progressSaude, saude);
        pet.src = './rostos/remedio.png';
        desabilitabotao();
        setTimeout(function () {
        acaoEmAndamento = false;
        pet.src = './rostos/feliz.png';
        saude = 99;
        habilitabotao();
        }, 3000);
    }
}

function espancar() {
    if (saude < 100) {
        acaoEmAndamento = true;
        let fomeAnterior = fome;
        let amorAnterior = amor;
        let sonoAnterior = sono;
        let banhoAnterior = banho;
        pet.src = './rostos/espancar.png';
        desabilitabotao();
        setTimeout(function () {
            acaoEmAndamento = false;
            pet.src = './rostos/feliz.png';
            fome = fomeAnterior + 30;
            amor = amorAnterior - 30;
            sono = sonoAnterior - 30;
            banho = banhoAnterior - 30;
            saude = saude - 30;
            habilitabotao();
        }, 3000);
    }
}

function atualizarBanho() {
    if (banho < 99) {
        acaoEmAndamento = true;
        banho = Math.min(banho, 100);
        atualizarProgressBar(progressBanho, banho);
        pet.src = './rostos/banho.png';
        desabilitabotao();
        petHat.src = './chapeus/nenhum.png';
        asas.src = './asas/nenhum.png';
        sapato.src = './sapatos/nenhum.png';
        setTimeout(function () {
            acaoEmAndamento = false;
            pet.src = './rostos/feliz.png';
            petHat.src = chapeuSelecionado;
            asas.src = asasSelecionado;
            sapato.src = sapatoSelecionado;
            
            banho = 100;
            habilitabotao();
        }, 5000);

    }
}

function removeeaster() {
    document.getElementById('lana').style.display = 'none';
    document.getElementById('tyler').style.display = 'none';
    document.getElementById('suicidio').style.display = 'none';
}

function atualizarExpressaoPet() {
    if (fome >= 100) {
        pet.src = './rostos/10.png';
    } else if (fome >= 80) {
        pet.src = './rostos/9.png';
    } else if (fome >= 70) {
        pet.src = './rostos/8.png';
    } else if (fome >= 60) {
        pet.src = './rostos/7.png';
    } else if (fome >= 50) {
        pet.src = './rostos/6.png';
    } else if (fome >= 40) {
        pet.src = './rostos/5.png';
    } else if (fome >= 30) {
        pet.src = './rostos/4.png';
    } else if (fome >= 20) {
        pet.src = './rostos/3.png';
    } else if (fome >= 10) {
        pet.src = './rostos/2.png';
    } else if (fome >= 5) {
        pet.src = './rostos/1.png';
    }
}

// --------------------------------------------------------------------- //

const fezes1 = document.getElementById('fezes1');
const fezes2 = document.getElementById('fezes2');
const fezes3 = document.getElementById('fezes3');

function atualizarFezes() {
    if (banho < 30) {
        fezes1.style.display = 'block';
        fezes2.style.display = 'block';
        fezes3.style.display = 'block';
    } else if (banho < 50) {
        fezes1.style.display = 'block';
        fezes2.style.display = 'block';
        fezes3.style.display = 'none';
    } else if (banho < 70) {
        fezes1.style.display = 'block';
        fezes2.style.display = 'none';
        fezes3.style.display = 'none';
    } else {
        fezes1.style.display = 'none';
        fezes2.style.display = 'none';
        fezes3.style.display = 'none';
    }
}





function atualizarProgressBar(progressBar, valor) {
    progressBar.style.width = valor + '%';
}

alimentarButton.addEventListener('click', function () {
    atualizarFome();
    audioAlimentar.play();
});

brincarButton.addEventListener('click', function () {
    atualizarAmor();
    audioBrincar.play();
});

dormirButton.addEventListener('click', function () {
    dormir();
    audioDormir.play();
});

banhoButton.addEventListener('click', function () {
    atualizarBanho();
    audioBanho.play();
});

medicarButton.addEventListener('click', function () {
    atualizarSaude();
    audioMedicar.play();
});

espancarButton.addEventListener('click', function () {
    espancar();
    audioEspancar.play();
});

suicidiobutton.addEventListener('click', function () {
    sematar();
    audioSuicidio.play();
});

loja.addEventListener('click', function () {
    petcontainer.style.display = 'none';
    lojacontainer.style.display = 'block';
    acaoEmAndamento = true;
    estanaloja = true;
});

voltar.addEventListener('click', function () {
    petcontainer.style.display = 'block';
    lojacontainer.style.display = 'none';
    acaoEmAndamento = false;
    estanaloja = false;
});

lana.addEventListener('click', function () {
    audiolana.play();
    cantar();
});


let estanaloja = false;

function backgroundloja() {
    if (!estanaloja) {
        setFundo(fundoSelecionado);
    }
    if (estanaloja){
        setFundo('fundo1');
    }
}

function cantar() {
    acaoEmAndamento = true;
    pet.src = './rostos/cantando.png';
    habilitabotao();
    setTimeout(function () {
        acaoEmAndamento = false;
        pet.src = './rostos/feliz.png';
        habilitabotao();
    }, 10000);
}



function dormir() {
    acaoEmAndamento = true;
    document.body.classList.add('escuro');
    pet.src = './rostos/rosto-dormindo.png';
    desabilitabotao();
    setTimeout(() => {
        acaoEmAndamento = false;
        document.body.classList.remove('escuro');
        pet.src = './rostos/feliz.png';
        sono = 100;
        habilitabotao();
    }, 5000);
}


function aumentarFomeAosPoucos() {
    setInterval(function () {
        if (fome < 100 && !acaoEmAndamento) {
            fome += 0.2;
            fome = Math.min(fome, 100); 
            atualizarExpressaoPet();
            atualizarProgressBar(progressFome, fome);
        }
    }, 50); 
}

function diminuirAmorAosPoucos() {
    setInterval(function () {
        if (amor > 0 && !acaoEmAndamento) {
            amor -= 0.1; 
            amor = Math.max(amor, 0);
            atualizarProgressBar(progressAmor, amor);
        }
    }, 50);
}

function diminuirSonoAosPoucos() {
    setInterval(function () {
        if (sono > 0 && !acaoEmAndamento) {
            sono -= 0.2; 
            sono = Math.max(sono, 0); 
            atualizarProgressBar(progressSono, sono);
        }
    }, 50); 
}

function diminuirSaudeAosPoucos() {
    setInterval(function () {
        if (saude > 0 && !acaoEmAndamento) {
            saude -= 0.15; 
            saude = Math.max(saude, 0); 
            atualizarProgressBar(progressSaude, saude);
        }
    }, 50); 
}

function diminuirBanhoAosPoucos() {
    setInterval(function () {
        if (banho > 0 && !acaoEmAndamento) {
            banho -= 0.3; 
            banho = Math.max(banho, 0); 
            atualizarProgressBar(progressBanho, banho);
        }
    }, 50);
}


function sematar() {
    saude = -100;
    sono = -100;
    fome = +1000;
    amor = -100;
    banho = -100;
    pet.src = './rostos/morte.png';
    desabilitabotao();
    setTimeout(function () {
        pet.src = './rostos/morte.png';
    }, 9999999999999);
}

aumentarFomeAosPoucos();
diminuirAmorAosPoucos();
diminuirSonoAosPoucos();
diminuirSaudeAosPoucos();
diminuirBanhoAosPoucos();
setInterval(atualizarFezes, 1);
setInterval(lojaitens, 1);
setInterval(verificarRequisitos, 1000);
setInterval(salvarPontos, 10);
setInterval(eastereggs, 50);
setInterval(backgroundloja, 1);