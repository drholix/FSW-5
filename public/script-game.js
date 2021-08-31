let batu = document.getElementById("batu");
let kertas = document.getElementById("kertas");
let gunting = document.getElementById("gunting");
let batuCom = document.getElementById("batu-comp");
let kertasCom = document.getElementById("kertas-comp");
let guntingCom = document.getElementById("gunting-comp");
let vs = document.getElementById("vs");




const randomRule = () =>{
  let pilihan = ["gunting", "kertas", "batu"]
  let randomNumber = (Math.floor(Math.random() * 3));
  return pilihan[randomNumber];
}

const win = () => {
  document.getElementById('vs').className = "msg-win-lose";
  vs.innerHTML = "Player 1 Win";
  console.log("Player 1 Win");
}

const lose = () =>{
  document.getElementById("vs").className = "msg-win-lose";
    vs.innerHTML = "Computer Win";
    console.log("Player 1 Lose");
}

const draw = () => {
  vs.innerHTML = "Draw";
  document.getElementById("vs").className = "draw";
  console.log("Draw.");
}


const game = (pemainMemilih) => {
  let compMemilih = randomRule();
  if(compMemilih === "gunting"){
    guntingCom.style.backgroundColor = "#C4C4C4"
    }
    else if(compMemilih === "kertas"){
    kertasCom.style.backgroundColor = "#C4C4C4"
    }
    else if(compMemilih === "batu"){
    batuCom.style.backgroundColor = "#C4C4C4"
    }

    switch(pemainMemilih + compMemilih){
      case "batugunting":
      case "kertasbatu":
      case "guntingkertas":
 win();
 break;

     case "kertasgunting":
     case "guntingbatu":
     case "batukertas":
 lose();
 break;

     case "guntinggunting":
     case "kertaskertas":
     case "batubatu":
 draw();
 break;

  }
}

const main = () => {
  batu.addEventListener('click', function(){
    batu.style.backgroundColor = "#C4C4C4" 
    game("batu")
})
kertas.addEventListener('click', function(){
    kertas.style.backgroundColor = "#C4C4C4" 
    game("kertas")
})
gunting.addEventListener('click', function(){
    gunting.style.backgroundColor = "#C4C4C4" 
    game("gunting")
})
}

main();


// let goodGame = false;
// const userHands = document.querySelectorAll('.user-hand');
// const pertandingan = userHands.forEach((i) => {
//   i.addEventListener('click', function () {
//     if (goodGame) {
//       return;
//     }
//     const user = i.id;
//     selectedHandBorder(user);
//     const comp = randomCompHand(user);
//     const result = rules(user, comp);
//     info(result);
//     goodGame = true;
//   });
// });

// const randomCompHand = (user) => {
//   const compHands = document.querySelectorAll('.comp-hand');
//   const comp = compHands[Math.floor(Math.random() * compHands.length)].id;
//   selectedHandBorder(comp);
//   return comp.substr(5);
// };

// const rules = (user, comp) => {
//   if (user == comp) return 'DRAW';
//   if (user == 'batu') return comp == 'gunting' ? 'PLAYER 1 WIN' : 'COMP WIN';
//   if (user == 'gunting') return comp == 'kertas' ? 'PLAYER 1 WIN' : 'COMP WIN';
//   if (user == 'kertas') return comp == 'batu' ? 'PLAYER 1 WIN' : 'COMP WIN';
  
// };

// const info = (msg) => {
//   let message = document.getElementById('msg');
//   message.innerHTML = msg;
//   msg == 'DRAW' ? message.classList.add('msg', 'msg-draw') : message.classList.add('msg', 'msg-win');
  
// };

// const selectedHandBorder = (selected) => {
//   let selectedHand = document.getElementById(selected);
//   selectedHand.classList.add('border');
// };

// document.querySelector('.refresh').addEventListener('click', function () {
//   goodGame = false;
//   document.querySelectorAll('.click-bg').forEach((i) => {
//     i.classList.remove('border');
//   });
//   let message = document.getElementById('msg');
//   message.innerHTML = 'VS';
//   message.classList.remove('msg', 'msg-win', 'msg-draw');
// });
