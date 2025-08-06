import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { CONFIG } from '../constants/config'

export const shareStatus = (guesses: string[][], lost: boolean) => {
  navigator.clipboard.writeText(
    CONFIG.language +
      solutionIndex +
      ' ' +
      `${lost ? 'X' : guesses.length}` +
      '/' +
      CONFIG.tries.toString() +
      '\n\n' +
      generateEmojiGrid(guesses) +
      '\n\n' +
      window.location.href.replace(`${window.location.protocol}//`, '')
  )
}

export const generateEmojiGrid = (guesses: string[][]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟦' // Блакитний замість зеленого для відповідності нашій палітрі
            case 'present':
              return '🟨' // Жовтий залишаємо
            default:
              return '⬜' // Білий/сірий залишаємо
          }
        })
        .join('')
    })
    .join('\n')
}
