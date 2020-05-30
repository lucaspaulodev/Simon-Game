//GLOBAL VARIABLES
const player = {
    nickname: '',
    sequency: [],
    rounds:[]
}

//SETUP FUNCTIONS

//CHOOSING A RANDOM NUMBER
function getRandom(){
    return Math.floor(Math.random() * 4 + 1)
}

//CHOOSING A RANDOM COLOR
function randomColor(){
    var colors = ['green', 'red', 'yellow', 'blue']
    player.sequency.push(colors[getRandom() - 1])
    return player.sequency
}

//SHOWING THE SEQUENCY TO USER
function showState(){
    var botoes = document.querySelectorAll('.bola button')
    player.sequency.forEach((color, index) => {
        setTimeout(() =>{
            document.querySelector(`.${color}`).style.backgroundColor = 'white';
        }, (index+0.5)*1000)
        setTimeout(() =>{
            document.querySelector(`.${color}`).style.backgroundColor = `${color}`;
        }, (index+1)*1000)
    })
}

//SETTING START
function start(){
    let name = document.querySelector('input').value.toUpperCase()
    if(name === '') {document.getElementById('nickname').textContent = 'NICKNAME'}
    else{document.getElementById('nickname').textContent = name}
    document.querySelector('.game').classList.toggle('hide')
    document.querySelector('.menu').classList.toggle('hide')
    player.sequency = []
    player.rounds = []
    randomColor()
    document.querySelector('#level').textContent = `LEVEL: ${player.sequency.length}`
    showState()
}

//VERIFING IF THE USER LOST OR WIN
function validate(){
    if(player.sequency.length == player.rounds.length){
        let validate = player.sequency.filter((elem, i) => elem == player.rounds[i])
        if(validate.length < player.rounds.length){
            player.sequency = []
            player.rounds = []
            alert('GAME OVER')
            document.querySelector('input').value = '';
            start()
        }
        if(validate.length == player.rounds.length){
            validate = []
            player.rounds =[]
            randomColor()
            showState()
        }
    }
}

//SETUP BEGGIN

//STARTING THE GAME
document.querySelector('.botao').addEventListener("click", () => {
    start()
})


//SETUP BUTTONS
document.querySelector('.green').addEventListener("click", ()=>{
    player.rounds.push('green')
    validate()
    document.querySelector('#level').textContent = `LEVEL: ${player.sequency.length}`
})
document.querySelector('.red').addEventListener("click", ()=>{
    player.rounds.push('red')
    validate()
    document.querySelector('#level').textContent = `LEVEL: ${player.sequency.length}`
})
document.querySelector('.yellow').addEventListener("click", ()=>{
    player.rounds.push('yellow')
    validate()
    document.querySelector('#level').textContent = `LEVEL: ${player.sequency.length}`
})
document.querySelector('.blue').addEventListener("click", ()=>{
    player.rounds.push('blue')
    validate()
    document.querySelector('#level').textContent = `LEVEL: ${player.sequency.length}`
})