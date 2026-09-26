
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0
let gameOver = false // Trava o jogo quando alguém atinge 10 pontos

/*
humanScoreNumber -> Camel Case
GAME_OPTIONS     -> Snake Case

*/

//ENUM
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    // Impede jogadas se o jogo já tiver terminado
    if (gameOver) return;

    playTheGame(humanChoice, playMachine())

}
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNuber = Math.floor(Math.random() * 3)


    return choices[randomNuber]
}
const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + 'Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
              (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
              (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = " Você Ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para Alexa"
    }
    // Checa se alguém atingiu 10 pontos
    checkWinner()
}

const checkWinner = () => {
    if (humanScoreNumber === 10) {
        gameOver = true
        showModal("Você venceu!")
    } else if (machineScoreNumber === 10) {
        gameOver = true
        showModal("GAME OVER")
    }
}

// Exibe o modal customizado na tela
const showModal = (message) => {
    const modal = document.querySelector('#custom-modal')
    const modalText = document.querySelector('#modal-text')

    modalText.innerHTML = message
    modal.style.display = 'flex'
}

// Reseta todas as variáveis e o placar
const restartGame = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0
    gameOver = false

    humanScore.innerHTML = 0
    machineScore.innerHTML = 0
    result.innerHTML = ""

    const modal = document.querySelector('#custom-modal')
    modal.style.display = 'none'
}
