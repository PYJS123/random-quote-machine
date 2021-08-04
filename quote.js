/*
  Quotes in quotes.json from:
  - https://blog.hubspot.com/sales/famous-quotes
*/
let quotes;
let darken = 25;
let colours = [
  ['rgb(228, 134, 31)', 'rgb(201, 107, 4)'],  // Orange
  ['rgb(42, 74, 198)', 'rgb(31, 53, 176)'],   // Blue
  ['rgb(50, 168, 82)', 'rgb(25, 132, 54)'],   // Green
  ['rgb(55, 154, 184)', 'rgb(34, 126, 154)'],  // Lighter blue
  ['rgb(130, 184, 55)', 'rgb(107, 166, 23)'],  // Olive Green
  ['rgb(184, 55, 166)', 'rgb(153, 37, 149)'],  // Deep Purple, pinkish
  ['rgb(184, 83, 55)', 'rgb(147, 32, 46)'],   // Soft crimson red
  ['rgb(184, 120, 55)', 'rgb(147, 32, 46)'],   // Reddish orange
  ['rgb(184, 83, 55)', 'rgb(147, 32, 46)'],   // Velvet Purple
  ['rgb(6, 158, 102)', 'rgb(147, 32, 46)']    // Tree/quiver green
];
let curr = 0;
let currCol = colours[curr][0],
    col = colours[curr][0]

window.onload = async function() {
  let cont = document.getElementsByClassName('card-container')[0];
  let rect = cont.getBoundingClientRect();
  cont.style['min-width'] = `${rect.width-10}px`;
  cont.style['min-height'] = `${rect.height-10}px`;
  setInterval(() => {
    currCol = lerpCol(currCol, col, 0.05);
    document.body.style.backgroundColor = currCol;
  }, 50);
  let stream = await fetch('quotes.json');
  quotes = await stream.json();
  newQuote();
}

function mouseOver() {
  document.getElementsByClassName('button')[0].style.backgroundColor = colours[curr][1];
}
function mouseOut() {
  document.getElementsByClassName('button')[0].style.backgroundColor = colours[curr][0];
}

function newQuote() {
  document.getElementById('quoteText').textContent = '';
  document.getElementById('authorText').textContent = '';
  curr = Math.floor(Math.random()*colours.length);
  col = colours[curr][0];
  let obj = quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById('quoteText').textContent = obj.quote;
  document.getElementById('authorText').textContent = obj.author;
}

function lerp(a, b, amt) {
  let aamt = (b-a)*amt;
  return a + aamt;
}

function lerpCol(a, b, amt) {
  let newA = a.split(/(\(|, |\))/);
  let newB = b.split(/(\(|, |\))/);
  newA.pop();
  newB.pop();
  newA.pop();
  newB.pop();
  newA[2] = lerp(parseInt(newA[2]), parseInt(newB[2]), amt);
  newA[4] = lerp(parseInt(newA[4]), parseInt(newB[4]), amt);
  newA[6] = lerp(parseInt(newA[6]), parseInt(newB[6]), amt);
  let currCol = '';
  newA.map(elt => {
    currCol += elt;
  });
  currCol += ')';
  return currCol;
}
