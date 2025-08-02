import { CONFIG } from './config'

// Кримськотатарський алфавіт (латиниця)
export const ORTHOGRAPHY = [
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'ı', 'o', 'p', 'ğ', 'ü', 'ñ',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ş', 'i',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', 'ö', 'ç', 'â'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}