const pet = document.getElementById('pet');
const alimentarButton = document.getElementById('alimentar');
const brincarButton = document.getElementById('brincar');
const dormirButton = document.getElementById('dormir');
const banhoButton = document.getElementById('banho');
const medicarButton = document.getElementById('medicar');
const espancarButton = document.getElementById('espancar');
const suicidiobutton = document.getElementById('suicidio');

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


const chapeu1 = document.getElementById('chapeu-1');
const chapeu2 = document.getElementById('chapeu-2');
const chapeu3 = document.getElementById('chapeu-3');
const chapeu4 = document.getElementById('chapeu-4');
const chapeu5 = document.getElementById('chapeu-5');


const petHat = document.getElementById('hat');
const petall = document.getElementById('pet-top');
const fundo1 = document.getElementById('fundo-1');
const fundo2 = document.getElementById('fundo-2');
const fundo3 = document.getElementById('fundo-3');
const fundo4 = document.getElementById('fundo-4');


const lana = document.getElementById('lana');
const audiolana = document.getElementById('audio-lana');
const tyler = document.getElementById('tyler');


// loja //

fundo2.disabled = true;
fundo3.disabled = true;
fundo4.disabled = true;
chapeu1.disabled = true;
chapeu2.disabled = true;
chapeu3.disabled = true;
chapeu4.disabled = true;


function lojaitens(){
    if(pontos > 10){
        fundo2.disabled = false;
        chapeu1.disabled = false;
    }
    if(pontos > 15){
        chapeu2.disabled = false;
        fundo3.disabled = false;
    }
    if(pontos > 20){
        chapeu3.disabled = false;
        fundo4.disabled = false;
    }
    if(pontos > 30){
        chapeu4.disabled = false;
    }

}



let pontos = 0;
let chapeuselecionado = '';
let fundoSelecionado = '';


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

function salvarchapeu() {
    localStorage.setItem('chapeu', chapeuselecionado);
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
        chapeuselecionado = chapeuSalvo;
        petHat.src = chapeuSalvo;
        petHat.style.display = 'block';
    }

    const fundoSalvo = localStorage.getItem('fundo');
    if (fundoSalvo !== null) {
        fundoSelecionado = fundoSalvo;
        setFundo(fundoSalvo);
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
    document.body.classList.add(classeFundo);
}

chapeu1.addEventListener('click', function () {
    petHat.src = './chapeus/hat1.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat1.png';
    localStorage.setItem('chapeu', chapeuSelecionado);
});

chapeu2.addEventListener('click', function () {
    petHat.src = './chapeus/hat2.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat2.png'; 
    localStorage.setItem('chapeu', chapeuSelecionado);
});

chapeu3.addEventListener('click', function () {
    petHat.src = './chapeus/hat3.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat3.png'; 
    localStorage.setItem('chapeu', chapeuSelecionado);
});

chapeu4.addEventListener('click', function () {
    petHat.src = './chapeus/hat4.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat4.png'; 
    localStorage.setItem('chapeu', chapeuSelecionado);
});

chapeu5.addEventListener('click', function () {
    petHat.src = './chapeus/hat5.png';
    petHat.style.display = 'block';
    chapeuSelecionado = './chapeus/hat5.png'; 
    localStorage.setItem('chapeu', chapeuSelecionado);
});

fundo1.addEventListener('click', function () {
    setFundo('fundo1');
    removeeaster()
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

function eastereggs(){
    if(fundoSelecionado == 'fundo4'){
        document.getElementById('lana').style.display = 'block';
    }
    if(fundoSelecionado == 'fundo3'){
        document.getElementById('tyler').style.display = 'block';
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
        petHat.style.display = 'none';
        setTimeout(function () {
            acaoEmAndamento = false;
            pet.src = './rostos/feliz.png';
            banho = 100;
            habilitabotao();
        }, 5000);

    }
}

function removeeaster() {
    document.getElementById('lana').style.display = 'none';
    document.getElementById('tyler').style.display = 'none';
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
});

voltar.addEventListener('click', function () {
    petcontainer.style.display = 'block';
    lojacontainer.style.display = 'none';
    acaoEmAndamento = false;
});

lana.addEventListener('click', function () {
    audiolana.play();
    cantar();
});

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