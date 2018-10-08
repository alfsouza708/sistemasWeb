const cards = document.querySelectorAll('.card');

let temCardVirado = false;
let travaCard = false;
let card1, card2;

function virarCard() {
    if(travaCard) return;
    if(this === card1) return;

    this.classList.add('vira');

    if(!temCardVirado){
        temCardVirado = true;
        card1 = this;
        return;
    }

    card2 = this;
    checaMatch();
}

function checaMatch() {
    if(card1.dataset.meme === card2.dataset.meme) {
        desativaCards();
        return;
    }

    desviraCards();
}

function desativaCards() {
    card1.removeEventListener('click', virarCard);
    card2.removeEventListener('click', virarCard);

    resetaCard();
}

function desviraCards() {

    travaCard = true;

    setTimeout(() => {
        card1.classList.remove('vira');
        card2.classList.remove('vira');

        resetaCard();
    }, 750);
}

function resetaCard() {
    [temCardVirado, travaCard] = [false, false];
    [card1, card2] = [null, null];
}

(function embaralha() {
    cards.forEach(card => {
      let posRandom = Math.floor(Math.random() * 12);
      card.style.order = posRandom;
    });
  })();

cards.forEach(card => card.addEventListener('click', virarCard));