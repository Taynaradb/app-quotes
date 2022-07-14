$( "#new" ).click(function(){

let quoteof = document.querySelector("#quote");
let author = document.querySelector("#author");
   
let quotes = [
    {
    name: "Albert Einstein",
    quote: "Two things are infinite: the universe and human stupidity; and I’m not sure about the universe."
    },
    {
    name: "Mahatma Gandhi",
    quote: "Whatever you do will be insignificant, but it is very important that you do it."
    },
    {
    name: "Arthur Ashe",
    quote: "Start where you are. Use what you have. Do what you can."
    }
];

//console.log(quotes[0].name);
//console.log(quotes[0].quote);

//quote.innerHTML = quotes[1].quote;

const n = quotes.length;

for (let i = 0; i <= n; i++) { 
  quoteof.innerHTML = quotes[i].quote;
  author.innerHTML = quotes[i].name;
}

});
