
const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
]

const randomImage = [
    "images/bridgeOnCliff.jpg", 
    "images/elephantTree.jpg", 
    "images/forestWithDropEarth.jpg", 
    "images/lake&forest.jpg", 
    "images/nature.jpg"
]

const quoteEl = document.getElementById("quote");

function quoteRand() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

const randomQuote = quoteRand();

quoteEl.innerHTML = `
        <span class = "quote-text">${randomQuote.quote}</span> <br> <span class="quote-author">- ${randomQuote.author}</span>`;

function imageRand() {
    return randomImage[Math.floor(Math.random() * randomImage.length)];
}

const bgImage = document.getElementById("image");
const result = bgImage.style.background = "rgb(41, 39, 39) url(" + imageRand(randomImage) + ") no-repeat center center/cover"; 

