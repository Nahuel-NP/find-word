

export function restartGame(matriz: Array<Array<string>>) {
  matriz.forEach(array => {
    array.forEach(el => el = '0')
  })
}