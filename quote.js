/*
  Quotes in quotes.json from:
  - https://blog.hubspot.com/sales/famous-quotes
*/
window.onload = async function() {
  let stream = await fetch('quotes.json');
  let json = await stream.json();
  console.log(json);
}
