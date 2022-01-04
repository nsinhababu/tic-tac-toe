const container = document.querySelector('.container');
let boxes = document.querySelectorAll('.box');
const firstMoveDiv = document.querySelector('.first-move');
const secondMoveDiv = document.querySelector('.second-move');
let name1;
let name2;
let randomNum = Math.floor(Math.random() * 10 + 1);
function playerSelector(params) {
  if (randomNum % 2 === 0) {
    name1 = 'player1';
    name2 = 'player2';
  }
  if (randomNum % 2 !== 0) {
    name1 = 'player2';
    name2 = 'player1';
  }
  firstMoveDiv.innerText = name1;
  secondMoveDiv.innerText = name2;
}
playerSelector();

let j = -1;
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', () => {
    j++;
    if (j % 2 === 0 && boxes[i].innerText === '') {
      boxes[i].innerText = 'X';
      boxes[i].classList.add('green');
    } else if (j % 2 !== 0 && boxes[i].innerText === '') {
      boxes[i].innerText = 'O';
      boxes[i].classList.add('red');
    }
    winner();
    greetings();
    if (j === 8 && b === 0) {
      container.innerText = '';
      container.innerHTML = '<span>Match Draw!</span>';
      container.classList.add('draw-container');
    }
  });
}
let b = 0;
function winner() {
  for (let i = 0; i < winningMoves.length; i++) {
    if (
      boxes[winningMoves[i][0]].innerText ===
        boxes[winningMoves[i][1]].innerText &&
      boxes[winningMoves[i][2]].innerText ===
        boxes[winningMoves[i][1]].innerText &&
      boxes[winningMoves[i][0]].innerText === 'X'
    ) {
      b = 1;
    }
    if (
      boxes[winningMoves[i][0]].innerText ===
        boxes[winningMoves[i][1]].innerText &&
      boxes[winningMoves[i][2]].innerText ===
        boxes[winningMoves[i][1]].innerText &&
      boxes[winningMoves[i][0]].innerText === 'O'
    ) {
      b = 2;
    }
  }
}
let winningMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function greetings() {
  if (name1 === 'player1' && b === 1) {
    container.innerHTML = '';
    container.innerHTML = `<span>${name1}  won </span>`;
    container.classList.add('X-container');
  }
  if (name1 === 'player1' && b === 2) {
    container.innerHTML = '';
    container.innerHTML = `<span>${name2}  won </span>`;
    container.classList.add('X-container');
  }
  if (name1 === 'player2' && b === 1) {
    container.innerHTML = '';
    container.innerHTML = `<span>${name1}  won </span>`;
    container.classList.add('X-container');
  }
  if (name1 === 'player2' && b === 2) {
    container.innerHTML = '';
    container.innerHTML = `<span>${name2}  won </span>`;
    container.classList.add('X-container');
  }
}

console.log(name1);
// function winner() {
//   for (let i = 0; i < winningMoves.length; i++) {
//     if (
//       boxes[winningMoves[i][0]].innerText ===
//         boxes[winningMoves[i][1]].innerText &&
//       boxes[winningMoves[i][2]].innerText ===
//         boxes[winningMoves[i][1]].innerText &&
//       boxes[winningMoves[i][0]].innerText === 'X'
//     ) {
//       container.innerHTML = '';
//       container.innerHTML = '<span>X  won</span>';
//       container.classList.add('X-container');

//       b = 1;
//       console.log('done');
//     }
//     if (
//       boxes[winningMoves[i][0]].innerText ===
//         boxes[winningMoves[i][1]].innerText &&
//       boxes[winningMoves[i][2]].innerText ===
//         boxes[winningMoves[i][1]].innerText &&
//       boxes[winningMoves[i][0]].innerText === 'O'
//     ) {
//       container.innerHTML = '';
//       container.innerHTML = '<span>O won</span>';
//       container.classList.add('O-container');

//       b = 1;
//       console.log('done2');
//     }
//   }
// }
