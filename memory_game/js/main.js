//define and monitor cards in play
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];

//check for match and alert users of result
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} else {
  		alert("Sorry, try again.");
}
}

//flip card and put flipped cards in console
function flipCard (cardId) {
	if (cardsInPlay.length === 2) {
	checkForMatch();
}
	console.log ("User flipped " + cards[cardId].rank);
	console.log (cards[cardId].suit);
	console.log (cards[cardId].cardImage);
//add user's choices to array
	cardsInPlay.push(cards[cardId].rank);
}

flipCard(0);
flipCard(1);
checkForMatch();