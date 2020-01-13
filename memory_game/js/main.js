//define and monitor cards in play
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

//check for match and alert users of result
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
}
}

//flip card and put flipped cards in console
function flipCard (cardId) {
	if (cardsInPlay.length === 2) {
	checkForMatch();
}
	console.log ("User flipped " + cards[cardId]);
//add user's choices to array
	cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(3);
