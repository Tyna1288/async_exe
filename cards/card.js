$(function () {
  let BASE_URL = 'https://deckofcardsapi.com/api/deck';

  // Question 1.
  async function part1() {
    let data = await $.getJSON(`${BASE_URL}/new/draw/`);
    let card = data.cards[0];
    console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
  }

  // Question 2.
  async function part2() {
    let firstCardData = await $.getJSON(`${BASE_URL}/new/draw/`);
    let deckId = firstCardData.deck_id;
    let secondCardData = await $.getJSON(`${BASE_URL}/${deckId}/draw/`);
    console.log(`${firstCardData.cards[0].value.toLowerCase()} of ${firstCardData.cards[0].suit.toLowerCase()}
${secondCardData.cards[0].value.toLowerCase()} of ${secondCardData.cards[0].suit.toLowerCase()}`)
  }

  // Question 3.
  async function setup() {
    let $btn = $('button');
    let $cardArea = $('#card-area');
    let deckData = await $.getJSON(`${BASE_URL}/new/shuffle/`);
    $btn.show().on('click', async function () {
      let cardData = await $.getJSON(`${BASE_URL}/${deckData.deck_id}/draw/`);
      let cardSrc = cardData.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  $(document).ready(function () {
    setup();
  });
})
