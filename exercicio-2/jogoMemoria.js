const cards = document.querySelectorAll('.card');

let temCardVirado = false;
let card1, card2;

function virarCard() {
    this.classList.add('vira');

    if(!temCardVirado){
        temCardVirado = true;
        card1 = this;
        return;
    }

    card2 = this;
    temCardVirado = false;

    checaMatch();
}

function checaMatch() {

}

function desativaCards() {

}

function desviraCards() {
    
}

cards.forEach(card => card.addEventListener('click', virarCard));