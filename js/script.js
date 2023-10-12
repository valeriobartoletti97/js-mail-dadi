const validEmail = [
    'pippo@email.it',
    'pluto@email.it'
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
    if(randomNumber1 === randomNumber2){
      result.innerHTML = `
      <h2 class="pt-3 text-black text-uppercase">Pareggio!</h2>
      <div class="mx-auto">
          <img src="img/draw.webp" alt="draw" class="d-block ">
      </div>
      `
    } else if (randomNumber1 > randomNumber2){
      result.innerHTML = `
      <h2 class="pt-3 text-black text-uppercase">Hai vinto!</h2>
      <div class="mx-auto">
          <img src="img/win.jpg" alt="win" class="d-block ">
      </div>
      `
    } else {
      result.innerHTML = `
      <h2 class="pt-3 text-black text-uppercase">Ops... hai perso!</h2>
      <div class="mx-auto">
          <img src="img/lose.jpg" alt="lose" class="d-block ">
      /div>
      `
    }
    result.classList.remove('d-none')
})