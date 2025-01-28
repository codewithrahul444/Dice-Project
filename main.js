let diceArr = ["dice1.mp4","dice2.mp4","dice3.mp4","dice4.mp4","dice5.mp4","dice6.mp4"];
let diceImg = document.querySelector("video");
let dice = document.querySelector(".rolle");
dice.addEventListener("click", () => {
    let random = diceArr[Math.round(0 + (5 - 0) * Math.random())];
    diceImg.src = random;
    console.log(random);
})