const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const button = document.querySelector("#new-quote");

const quotes = [
  {
    quote:
      "The movies are the only business where you can go out front and applaud yourself.",
    person: "Will Rogers",
  },
  {
    quote:
      "To be able to fill leisure intelligently is the last product of civilization, and at present very few people have reached this level.",
    person: "Bertrand Russell ",
  },
  {
    quote:
      "Patriotism is your conviction that this country is superior to all other countries because you were born in it.",
    person: "George Bernard Shaw",
  },
  {
    quote: "No matter how cynical you get, it is impossible to keep up.",
    person: "Lily Tomlin",
  },
  {
    quote:
      "Another unsettling element in modern art is that common symptom of immaturity, the dread of doing what has been done before.",
    person: "Edith Wharton ",
  },
  {
    quote: "Better fare hard with good men than feast it with bad.",
    person: "Thomas Paine ",
  },
  {
    quote:
      "We did not change as we grew older; we just became more clearly ourselves.",
    person: "Lynn Hall",
  },
  {
    quote: "[Spring is] when life's alive in everything.",
    person: "Christina Rossetti",
  },
  {
    quote:
      "Sin bravely...We will never have all the facts to make a perfect judgement, but with the aid of basic experience we must leap bravely into the future.",
    person: "Russell R. McIntyre",
  },
  {
    quote: "To love and be loved is to feel the sun from both sides.",
    person: "David Viscott",
  },
];

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
