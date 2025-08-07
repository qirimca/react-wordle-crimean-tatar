import {
  addDays,
  differenceInDays,
  formatISO,
  parseISO,
  startOfDay,
} from 'date-fns'
import { default as GraphemeSplitter } from 'grapheme-splitter'
import queryString from 'query-string'

import { ENABLE_ARCHIVED_GAMES } from '../constants/settings'
import { NOT_CONTAINED_MESSAGE, WRONG_SPOT_MESSAGE } from '../constants/strings'
import { VALID_GUESSES } from '../constants/validGuesses'
import { WORDS } from '../constants/wordlist'
import { getToday } from './dateutils'
import { getGuessStatuses } from './statuses'

// 1 January 2022 Game Epoch
export const firstGameDate = new Date(2022, 0)
export const periodInDays = 1

// Нормалізація Unicode для кримськотатарських літер
const normalizeWord = (word: string) => {
  const original = word
  const result = word
    .normalize('NFC')
    // Спочатку правильно обробляємо турецькі/кримськотатарські літери
    .replace(/İ/g, 'i')  // Турецьке велике İ -> маленьке i
    .replace(/I/g, 'ı')  // Латинське велике I -> кримськотатарське ı 
    .toLowerCase()
    // Додаткова нормалізація для інших спецсимволів
    .replace(/[ĞG]/gi, 'ğ')
    .replace(/[ÇC]/gi, 'ç') 
    .replace(/[ÑN]/gi, 'ñ')
    .replace(/[ÖO]/gi, 'ö')
    .replace(/[ÜU]/gi, 'ü')
    .replace(/[ŞS]/gi, 'ş')
  
  // DEBUG: Логи для troubleshooting
  if (original !== result) {
    console.log(`🔍 Normalize: "${original}" -> "${result}"`)
  }
  
  return result
}

export const isWordInWordList = (word: string) => {
  const normalizedWord = normalizeWord(word)
  const normalizedWords = WORDS.map(w => normalizeWord(w))
  const normalizedGuesses = VALID_GUESSES.map(w => normalizeWord(w))
  
  const inWords = normalizedWords.includes(normalizedWord)
  const inGuesses = normalizedGuesses.includes(normalizedWord)
  const result = inWords || inGuesses
  
  // DEBUG: Логи для troubleshooting
  console.log(`🔍 Word check: "${word}" -> "${normalizedWord}"`)
  console.log(`  📖 In WORDS: ${inWords}`)
  console.log(`  📝 In GUESSES: ${inGuesses}`)
  console.log(`  ✅ Result: ${result}`)
  
  // Якщо слово qırım або vetan, покажи детальну інформацію
  if (normalizedWord === 'qırım' || normalizedWord === 'vetan') {
    console.log(`🔍 Special debug for "${normalizedWord}":`)
    console.log('  First 10 normalized WORDS:', normalizedWords.slice(0, 10))
    console.log('  First 10 normalized GUESSES:', normalizedGuesses.slice(0, 10))
    console.log('  Contains in WORDS?', normalizedWords.includes(normalizedWord))
    console.log('  Contains in GUESSES?', normalizedGuesses.includes(normalizedWord))
  }
  
  return result
}

export const isWinningWord = (word: string) => {
  return normalizeWord(solution) === normalizeWord(word)
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
// also check if all revealed instances of a letter are used (i.e. two C's)
export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  if (guesses.length === 0) {
    return false
  }

  const lettersLeftArray = new Array<string>()
  const guess = guesses[guesses.length - 1]
  const statuses = getGuessStatuses(solution, guess)
  const splitWord = unicodeSplit(word)
  const splitGuess = unicodeSplit(guess)

  for (let i = 0; i < splitGuess.length; i++) {
    if (statuses[i] === 'correct' || statuses[i] === 'present') {
      lettersLeftArray.push(splitGuess[i])
    }
    if (statuses[i] === 'correct' && splitWord[i] !== splitGuess[i]) {
      return WRONG_SPOT_MESSAGE(splitGuess[i], i + 1)
    }
  }

  // check for the first unused letter, taking duplicate letters
  // into account - see issue #198
  let n
  for (const letter of splitWord) {
    n = lettersLeftArray.indexOf(letter)
    if (n !== -1) {
      lettersLeftArray.splice(n, 1)
    }
  }

  if (lettersLeftArray.length > 0) {
    return NOT_CONTAINED_MESSAGE(lettersLeftArray[0])
  }
  return false
}

export const unicodeSplit = (word: string) => {
  return new GraphemeSplitter().splitGraphemes(word)
}

export const unicodeLength = (word: string) => {
  return unicodeSplit(word).length
}

export const localeAwareLowerCase = (text: string) => {
  // Спочатку нормалізуємо для кримськотатарської
  const normalized = text
    .replace(/İ/g, 'i')  
    .replace(/I/g, 'ı')
  
  return process.env.REACT_APP_LOCALE_STRING
    ? normalized.toLocaleLowerCase(process.env.REACT_APP_LOCALE_STRING)
    : normalized.toLowerCase()
}

export const localeAwareUpperCase = (text: string) => {
  // Для відображення використовуємо турецький/кримськотатарський стандарт
  const processed = text
    .replace(/i/g, 'İ')  // маленьке i -> турецьке велике İ
    .replace(/ı/g, 'I')  // кримськотатарське ı -> латинське велике I
  
  return process.env.REACT_APP_LOCALE_STRING
    ? processed.toLocaleUpperCase(process.env.REACT_APP_LOCALE_STRING)  
    : processed.toUpperCase()
}

export const getLastGameDate = (today: Date) => {
  const t = startOfDay(today)
  let daysSinceLastGame = differenceInDays(firstGameDate, t) % periodInDays
  return addDays(t, -daysSinceLastGame)
}

export const getNextGameDate = (today: Date) => {
  return addDays(getLastGameDate(today), periodInDays)
}

export const isValidGameDate = (date: Date) => {
  if (date < firstGameDate || date > getToday()) {
    return false
  }

  return differenceInDays(firstGameDate, date) % periodInDays === 0
}

export const getIndex = (gameDate: Date) => {
  let start = firstGameDate
  let index = -1
  do {
    index++
    start = addDays(start, periodInDays)
  } while (start <= gameDate)

  return index
}

export const getWordOfDay = (index: number) => {
  if (index < 0) {
    throw new Error('Invalid index')
  }

  return localeAwareUpperCase(WORDS[index % WORDS.length])
}

export const getSolution = (gameDate: Date) => {
  const nextGameDate = getNextGameDate(gameDate)
  const index = getIndex(gameDate)
  const wordOfTheDay = getWordOfDay(index)
  return {
    solution: wordOfTheDay,
    solutionGameDate: gameDate,
    solutionIndex: index,
    tomorrow: nextGameDate.valueOf(),
  }
}

export const getGameDate = () => {
  if (getIsLatestGame()) {
    return getToday()
  }

  const parsed = queryString.parse(window.location.search)
  try {
    const d = startOfDay(parseISO(parsed.d!.toString()))
    if (d >= getToday() || d < firstGameDate) {
      setGameDate(getToday())
    }
    return d
  } catch (e) {
    console.log(e)
    return getToday()
  }
}

export const setGameDate = (d: Date) => {
  try {
    if (d < getToday()) {
      window.location.href = '/?d=' + formatISO(d, { representation: 'date' })
      return
    }
  } catch (e) {
    console.log(e)
  }
  window.location.href = '/'
}

export const getIsLatestGame = () => {
  if (!ENABLE_ARCHIVED_GAMES) {
    return true
  }
  const parsed = queryString.parse(window.location.search)
  return parsed === null || !('d' in parsed)
}

export const { solution, solutionGameDate, solutionIndex, tomorrow } =
  getSolution(getGameDate())
