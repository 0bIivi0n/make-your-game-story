var timer;
var enemyAttackID;
var enemyAttackInterval = 5000;
var isPaused = false;
var introMargin = Number((getComputedStyle(introText).marginTop).split("px")[0]);
var introID;
var minutes = 0;
var seconds = 0;

document.getElementById("next-level-button").disabled = true;
document.getElementById("try-again-button").disabled = true;

createEnemyContainer();
spawnEnemies();

function startIntro() {

    introText.style.marginTop = 500 + "px";
    introMargin = Number((getComputedStyle(introText).marginTop).split("px")[0]);

    var audio = new Audio("./assets/audio/Star Wars - Main Theme 8 Bit.mp3");
    
    audio.play();
    introScreen.style.display = "block";
    introID = setInterval(moveTextUp, 75);
}


function moveTextUp() {

    console.log("moveTextUp entered");

    var textheight = Number((getComputedStyle(introText).marginTop).split("px")[0]);
    
    newHeight = textheight - 1;

    introText.style.marginTop = newHeight + "px";

    introMargin -= 1;

    console.log(introMargin);

    if (introMargin <= -500) {
        clearInterval(introID);
    }
    
}

function startGame() {

    clearInterval(introID);
    introID = 0;

    minutes = 0;
    seconds = 0;

    introScreen.style.display = "none";

    if (playerMissileFired) {
        let playerMissile = document.getElementById("player-missile");
        playerMissileFired = false;
        playerMissile.remove();
    }

    if (enemyMissileFired) {
        let enemyMissile = document.getElementById("enemy-missile");
        enemyMissileFired = false;
        enemyMissile.remove();
    }

    startTimer();
    enemyAttackID = setInterval(makeEnemyShoot, enemyAttackInterval);
    printHealth();
    animate();
    startMenu.style.opacity = "0";
    pauseButton.style.display = "block";
    player.style.opacity = "1";
    restartButton.style.display = "block";
    startButton.disabled = true;
    startButton.style.opacity = "0";
    nextLevelButton.disabled = true;

    console.log("Enemy speed: " + enemySpeed + ", Enemy attack Interval: " + enemyAttackInterval);
}

function printStartPage() {

    startPage.style.opacity = "1";
    startButton.disabled = false;
    startButton.style.opacity = "1";
    tryAgainButton.disabled = true;
    nextLevelButton.disabled = true;
    pauseMenu.style.opacity = "0";

}

function printPauseMenu() {
    pauseMenu.style.opacity = "1";
}

function gameOver() {
    
    gameOverPage.style.opacity = "1";
    tryAgainButton.disabled = false;
    
}

function congratulations() {
    
    gratsPage.style.opacity = "1";
    nextLevelButton.disabled = false;
}



function toggleAnimation() {
    
    startMenu.style.opacity = "1";
    if (isPaused === true) { // Animation stoppée : on la relance
        isPaused = false;
        startMenu.style.opacity = "0";
        pauseMenu.style.opacity = "0";
        document.getElementById("toggle").innerHTML="Pause";
        startTimer();
    } else {  // Arrêt de l'animation
        isPaused = true;
        document.getElementById("toggle").innerHTML="Resume";
        clearInterval(timer);
        clearInterval(enemyAttackInterval);
    }
}

function closeGratsPage() {
    gratsPage.style.opacity = "0";
}

function createEnemyContainer() {
    var container = document.createElement("div");
    container.id = "enemy-container";
    document.getElementById("enemy-wrapper").appendChild(container);
}

function startTimer() {
    
    timer = setInterval(() => {
        seconds++;
        if(seconds > 59) {
            minutes++;
            seconds = 0;
        }
        document.getElementById("timer").innerHTML="<strong>Timer: " + minutes +"m, " + seconds + "s </strong>";
    }, 1000)
}

function getRandomInt(min, max) {
    var minCeiled = Math.ceil(min);
    var maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function setNextLevel() {

    console.log("setNextLevel entered");

    createEnemyContainer(); 
    spawnEnemies(30);
    enemyAttackInterval -= 500;
    enemySpeed += 0.1;
    setNextIntro();
    closeGratsPage(); 
    printStartPage();
}

function setNextIntro() {
    let pOne =  document.getElementById("p1");
    let pTwo =  document.getElementById("p2");
    let pThree =  document.getElementById("p3");
    let pFour =  document.getElementById("p4");
    let pFive =  document.getElementById("p5");

    pOne.textContent = "As the last invader was destroyed, and the bravest of our finest pilots still in one piece, humanity thought it was the end of the war.";
    pTwo.textContent = "Soon, the human alliance would realize that the enemy had more than one string to their bows, they will be back and they will be angry.";
    pThree.textContent = "Guided by their will to conquer and their thirst for revenge, the Space Intruders were secretly gathering their forces for another battle.";
    pFour.textContent = "Once again, the bravest of all pilots will be the only line of defense capable of stoping the alien invasion that threatens our universe.";
    pFive.textContent = "This time, the battle will be even more dangerous, scouts reported way more and stronger enemies than before. You shall not flinch, pilot.";
}

function PauseGame() {
    isPaused = true;
}




