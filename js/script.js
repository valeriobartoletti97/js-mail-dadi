const validEmail = [
    'pippo@email.it',
    'pluto@email.it'dadi immaginedice game
];
/* const results = [1, 2, 3, 4, 5, 6]; */
const alert = document.getElementById('alert');
const correct = document.getElementById('correct');
const emailBtn = document.querySelector('.btn-success');
const gameBtn = document.getElementById('game-btn')
const game = document.getElementById('game')
const result = document.getElementById('result')
console.log(gameBtn)
emailBtn.addEventListener("click", function(){
    let email = document.getElementById('email').value;
    let found = false;
    for(let i = 0; i <= validEmail.length; i++){
      let currentName = validEmail[i]; 
      if(currentName/* .toLocaleLowerCase() */ === email/* .toLocaleLowerCase() */){
        found = true
      }
    }
    if (found === false){
       correct.classList.add('d-none')
       alert.classList.remove('d-none')
    } else {
       alert.classList.add('d-none')
       correct.classList.remove('d-none')
    }
})
gameBtn.addEventListener("click", function(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    if(randomNumber1 === randomNunber2){
      
    }
})