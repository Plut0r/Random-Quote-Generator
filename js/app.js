
const quoteText = document.querySelector("#text");
let authorName = document.querySelector("#author");
let quoteBtn = document.querySelector("button");
let twitterBtn = document.querySelector(".twitter");
let tumblrBtn = document.querySelector('.tumblr');
let text = document.querySelector(".quote-text");
let author = document.querySelector(".quote-author");


function randomQuote() {
    // console.log("clicked");
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading..";
    //fetching random quote from the API and parsing it into Javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank"); // opening a new twitter tab with passing quote in the url
})

tumblrBtn.addEventListener("click", () => {
    let tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,url=${quoteText.innerText}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    window.open(tumblrUrl, "_blank"); // opening a new tumblr tab with passing quote in the url
})

quoteBtn.addEventListener("click", randomQuote);
//quoteBtn.addEventListener("click", backgroundColor);

function backgroundColor() {
    let colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];
      
      let color = Math.floor(Math.random() * colors.length);
      $('html body').animate(
        {
          backgroundColor: colors[color],
          color: colors[color]
        },
        1000
      );
      $('.btn').animate(
        {
          backgroundColor: colors[color]
        },
        1000
      );    
}

$(document).ready(function() {
   $("button").on("click", backgroundColor);
});




