import { words } from "../data/words";

export const matriz = [
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

export const game = {
  activeArray: 0,
  word: getRandomWord(words),
}

export function getRandomWord(lista: Array<string>) {
  let rnd = Math.random();
  let item = Math.floor(rnd * lista.length);
  return lista[item].toUpperCase();
}

export function restartGame(/* matriz: Array<Array<string>> */) {
  matriz.forEach(array => {
    array.fill('0')
  });

  game.word = getRandomWord(words)
  game.activeArray = 0;
  restoreCells();
  restoreButtons();
}

function restoreCells (){
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.classList.remove('bg-green-400','bg-grayt-400','bg-yellow-400');
    cell.classList.add('bg-white');
    cell.textContent = '';
  })
}

function restoreButtons(){
  const buttons = document.querySelectorAll('.qwerty');
  buttons.forEach(btn => {
    btn.classList.remove('bg-green-400','bg-grayt-400','bg-yellow-400');
    btn.classList.add('bg-white');
  })
}