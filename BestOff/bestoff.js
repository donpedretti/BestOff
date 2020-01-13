function genQuote() {
    console.log('genQuote');
    var randNum = Math.floor(Math.random() * 8) + 1;
    console.log(randNum);
    document.getElementById('quote').innerHTML = quotes[randNum];
}

//quote array
var quotes = ["The best place to find the best",
    "These items are the best!",
    "There are only 5 items per category, so you won't be bored",
    "Don't cry if you're not on the list, please",
    "Trusted Reviews, here we come!",
    "This website is super designish",
    "I love rankings",
    "This website does not support Trump nor the french (JK for the french)",
    "This website took about 14 hours of work to be built"
];