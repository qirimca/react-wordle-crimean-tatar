export const CONFIG = {
  tries: 6, // Кількість спроб
  language: 'Qırımtatarca', // Назва гри у шапці
  wordLength: 5, // Довжина слова
  author: "QIRI'M Young",
  authorWebsite: 'https://ctcorpus.org',
  wordListSource: 'Crimean Tatar National Corpus',
  wordListSourceLink: 'https://ctcorpus.org',
  
  // Для аналітики Google Analytics. Поки залиште пустим.
  googleAnalytics: '', 

  // --- Розширені налаштування ---
  shuffle: false, // Не перемішувати слова (щоб було "слово дня")
  normalization: 'NFC', // Стандарт нормалізації Unicode
  startDate: 'January 1, 2022 00:00:00',
  defaultLang: 'crh', // Мова інтерфейсу за замовчуванням
  availableLangs: ['crh', 'uk', 'tr', 'en'], // Мови, доступні для перемикання
  escapeSpecialCharacters: true,
}