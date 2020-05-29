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
            console.log(`Acendendo ${color}`)
            document.querySelector(`.${color}`).style.backgroundColor = 'white';
        }, (index+0.5)*1000)
        setTimeout(() =>{
            document.querySelector(`.${color}`).style.backgroundColor = `${color}`;
        }, (index+1)*1000)
    })
}

//VERIFING IF THE USER LOST OR WIN
function validate(){
    if(player.sequency.length == player.rounds.length){
        let validate = player.sequency.filter((elem, i) => elem == player.rounds[i])
        if(validate.length < player.rounds.length){
            alert('GAME OVER')
            player.sequency = []
            player.rounds = []
        }
        if(validate.length == player.rounds.length){
            console.log(player.rounds)
            validate = []
            player.rounds =[]
            randomColor()
            console.log(player.sequency)
            showState()
        }
    }
}

//SETUP BEGGIN

//STARTING THE GAME
document.querySelector('.botao').addEventListener("click", () => {
        let name = document.querySelector('input').value.toUpperCase()
        if(name === '') {document.getElementById('nickname').textContent = 'NICKNAME'}
        else{document.getElementById('nickname').textContent = name}
        document.querySelector('.game').classList.toggle('hide')
        document.querySelector('.menu').classList.toggle('hide')
        randomColor()
        console.log(player.sequency)
        showState()
})


//SETUP BUTTONS
document.querySelector('.green').addEventListener("click", ()=>{
    console.log(player.sequency)
    player.rounds.push('green')
    document.querySelector('#level').textContent = `LEVEL: ${player.sequency.length+1}`
    validate()
})
document.querySelector('.red').addEventListener("click", ()=>{
    console.log(player.sequency)
    player.rounds.push('red')
    document.querySelector('#level').textContent = `LEVEL: ${player.sequency.length+1}`
    validate()
})
document.querySelector('.yellow').addEventListener("click", ()=>{
    console.log(player.sequency)
    player.rounds.push('yellow')
    document.querySelector('#level').textContent = `LEVEL: ${player.sequency.length+1}`
    validate()
})
document.querySelector('.blue').addEventListener("click", ()=>{
    console.log(player.sequency)
    player.rounds.push('blue')
    document.querySelector('#level').textContent = `LEVEL: ${player.sequency.length+1}`
    validate()
})