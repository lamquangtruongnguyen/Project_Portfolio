const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const reset = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playTo')

let winningScore = parseInt(winningScoreSelect.value)
let isGameOver = false


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetF()
})
reset.addEventListener('click', resetF)

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score
    }
}

function resetF() {
    isGameOver = false
    // p1.score = 0
    // p2.score = 0
    // p1.display.textContent = 0
    // p2.display.textContent = 0
    // p1.display.classList.remove('has-text-success', 'has-text-danger')
    // p2.display.classList.remove('has-text-success', 'has-text-danger')
    // p1.button.disabled = false;
    // p2.button.disabled = false;
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
}