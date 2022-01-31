let balls = document.querySelector('.balls');
let quant = document.querySelectorAll('.slides .image');
let atual = 0;
let imagem = document.getElementById('atual');
let next = document.getElementById('next');
let back = document.getElementById('back');
let rolar = true;

const typing = document.querySelector('[data-js="typing"]');
const messages = ['WAYS', 'IDEAS', 'BRANDS', 'CONTENTS']; 

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = '';
let currenteCharacters = '';

for(let i=0; i < quant.length; i++){
    let div = document.createElement('div');
    div.id = i;
    balls.appendChild(div);
}

document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div');

for(let i=0; i < pos.length; i++){
    pos[i].addEventListener("click", () => {
        atual = pos[i].id;
        rolar = false;
        slide();
    })
}

back.addEventListener("click", () => {
    atual--;
    rolar = false;
    slide();
});

next.addEventListener("click", () => {
    atual++;
    rolar = false;
    slide();
});

function slide(){
    if(atual >= quant.length){
        atual = 0;
    }
    else if(atual < 0){
        atual = quant.length - 1;
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual');
    imagem.style.marginLeft = -300*atual+'px';
    document.getElementById(atual).classList.add('imgAtual');
}

setInterval(() => {
    if(rolar){
        atual++;
        slide();
    }
    else{
        rolar = true;
    }
}, 4000);


const type = () => {
    if(messageIndex === messages.length){
        messageIndex = 0;
    }

    currentMessage = messages[messageIndex];
    currenteCharacters = currentMessage.slice(0, characterIndex++);
    typing.textContent = currenteCharacters;

    if(currenteCharacters.length === currentMessage.length){
        messageIndex++;
        characterIndex = 0;
    }
}

setInterval(type, 300);