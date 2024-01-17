
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
    "images/bridgeOnCliff.jpeg", 
    "images/elephantTree.jpeg", 
    "images/forestWithDropEarth.jpeg", 
    "images/lake&forest.jpeg", 
    "images/nature.jpg"
]

const quoteEl = document.getElementById("quote");

quotes.forEach(function(item){
    quoteEl.innerHTML = `
        <span class = "quote-text">${quoteRand(item).quote}</span> <br> <span class="quote-author">- ${quoteRand(item).author}</span>`;
        console.log(quoteEl)
})

function quoteRand() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}


function imageRand() {
    return randomImage[Math.floor(Math.random() * randomImage.length)];
}

const bgImage = document.getElementById("image");
const result = bgImage.style.background = "rgb(41, 39, 39) url(" + imageRand(randomImage) + ") no-repeat center center/cover"; 

