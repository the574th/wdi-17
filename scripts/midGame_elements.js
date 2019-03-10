var createTimer = function () {

    // Creates the timer div in javascript
    var timerDiv = document.createElement('div');
    timerDiv.setAttribute('id','timer');
    timerDiv.classList.toggle('timerSlide')
    timerDiv.innerText = gamePlay.time;

    // Appends the timer div into the DOM
    var main = document.querySelector('#bapak');
    var first = main.children[0];
    main.insertBefore(timerDiv, first);
};



var countdown = function() {
    var startCounting = setInterval(function() {
        var timerDiv = document.getElementById('timer');
            gamePlay.time--;
            timerDiv.innerText = gamePlay.time;

        if (gamePlay.time === 0) {
            clearInterval(startCounting);
            results();
            timerDiv.style.fontSize = "8vh";
            timerDiv.innerText = 'Time Out!'
        }

    }, 1000);
}



var scoreBoard = function() {

    //  Create the score div in javascript
    var playerScore = document.createElement('div');
    playerScore.setAttribute('id','score');
    playerScore.classList.toggle('scoreBoardslide');
    playerScore.innerText = gamePlay.score;

    var currentLevel = document.createElement('div')
    currentLevel.setAttribute('id','level');
    currentLevel.classList.toggle('scoreSlide');
    currentLevel.innerText = 'Level '+ gamePlay.level;
    document.body.appendChild(playerScore);
    document.body.appendChild(currentLevel);
}



function infoTab() {

    // Create the Information Div
    let infoTab = document.createElement('div');
    infoTab.setAttribute('id', 'information');

    // Append Information Div
    document.body.appendChild(infoTab)
}