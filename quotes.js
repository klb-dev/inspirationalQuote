
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

let randomImage = [
    "images/bridgeOnCliff.jpeg", 
    "images/elephantTree.jpeg", 
    "images/forestWithDropEarth.jpeg", 
    "images/lake&forest.jpeg", 
    "images/nature.jpg"
]

function imageRand(imgArr) {
    return imgArr[Math.floor(Math.random() * imgArr.length)];
}

function quoteRand(quoteArr) {
    return quoteArr[Math.floor(Math.random() * quoteArr.length)];
}

const quoteEl = document.getElementById("quote");
quoteEl.classList.add("quote")
const quoteResult = quoteEl.innerHTML = `<span class = "quote-text">${quoteRand(quotes).quote}</span> <br> <span class="quote-author">- ${quoteRand(quotes).author}</span>`;

const bgImage = document.getElementById("image");
const result = bgImage.style.background = "rgb(41, 39, 39) url(" + imageRand(randomImage) + ") no-repeat center center/cover"; 

