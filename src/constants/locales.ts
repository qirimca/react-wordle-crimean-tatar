export interface LocaleStrings {
  GAME_TITLE: string
  WIN_MESSAGES: string[]
  GAME_COPIED_MESSAGE: string
  NOT_ENOUGH_LETTERS_MESSAGE: string
  WORD_NOT_FOUND_MESSAGE: string
  HARD_MODE_ALERT_MESSAGE: string
  HARD_MODE_DESCRIPTION: string
  HIGH_CONTRAST_MODE_DESCRIPTION: string
  CORRECT_WORD_MESSAGE: (solution: string) => string
  WRONG_SPOT_MESSAGE: (guess: string, position: number) => string
  NOT_CONTAINED_MESSAGE: (letter: string) => string
  ENTER_TEXT: string
  DELETE_TEXT: string
  STATISTICS_TITLE: string
  GUESS_DISTRIBUTION_TEXT: string
  NEW_WORD_TEXT: string
  SHARE_TEXT: string
  SHARE_FAILURE_TEXT: string
  TOTAL_TRIES_TEXT: string
  SUCCESS_RATE_TEXT: string
  CURRENT_STREAK_TEXT: string
  BEST_STREAK_TEXT: string
  DISCOURAGE_INAPP_BROWSER_TEXT: string
  DATEPICKER_TITLE: string
  DATEPICKER_CHOOSE_TEXT: string
  DATEPICKER_TODAY_TEXT: string
  ARCHIVE_GAMEDATE_TEXT: string
}

export const LOCALE_CRH: LocaleStrings = {
  GAME_TITLE: 'Qırımtatar Söz Tapuv Oyunı',
  WIN_MESSAGES: ['Pek güzel!', 'Aferim!', 'Yahşí yapıldı!', 'Mükemmel!', 'Fevqalade!'],
  GAME_COPIED_MESSAGE: 'Oyun kopyalandı',
  NOT_ENOUGH_LETTERS_MESSAGE: 'Arif yeterli degil',
  WORD_NOT_FOUND_MESSAGE: 'Söz tapılmadı',
  HARD_MODE_ALERT_MESSAGE: 'Çetin rejim faqat başlanğıçta qoşıla bile!',
  HARD_MODE_DESCRIPTION: 'Açılğan işaretler sonrakı tahmislerde istimat etilmeli',
  HIGH_CONTRAST_MODE_DESCRIPTION: 'Renk körüni için yaqşılaştırıluv',
  CORRECT_WORD_MESSAGE: (solution: string) => `Söz ${solution} edi`,
  WRONG_SPOT_MESSAGE: (guess: string, position: number) => `${guess} arifi ${position} mevamında qullanılmalı`,
  NOT_CONTAINED_MESSAGE: (letter: string) => `Tahmin ${letter} arifini ihtiva etmeli`,
  ENTER_TEXT: 'done',
  DELETE_TEXT: 'backspace',
  STATISTICS_TITLE: 'Statistika',
  GUESS_DISTRIBUTION_TEXT: 'Tahmin Taqsimi',
  NEW_WORD_TEXT: 'Yañı söz',
  SHARE_TEXT: 'Paylaşmaq',
  SHARE_FAILURE_TEXT: 'Neticeler paylaşılmadı. Bu özellik faqat emniyetli kontekstlerde (HTTPS) çalışır.',
  TOTAL_TRIES_TEXT: 'Umumî denemeler',
  SUCCESS_RATE_TEXT: 'Başarı nisbeti',
  CURRENT_STREAK_TEXT: 'Şimdiki qator',
  BEST_STREAK_TEXT: 'Eñ iyi qator',
  DISCOURAGE_INAPP_BROWSER_TEXT: "Siz içeri alınğan brauzer qullanasız ve netice paylaşmaqta veya saqlamaqta problemler yaşay bilesiñiz. Cihazıñıznıñ esas brauzerni qullanmanı tavsiye eteriz.",
  DATEPICKER_TITLE: 'Keçken tarihni saylan',
  DATEPICKER_CHOOSE_TEXT: 'Saylan',
  DATEPICKER_TODAY_TEXT: 'bugün',
  ARCHIVE_GAMEDATE_TEXT: 'Oyun tarihi',
}

export const LOCALE_EN: LocaleStrings = {
  GAME_TITLE: 'Crimean Tatar Wordle',
  WIN_MESSAGES: ['Great!', 'Awesome!', 'Well done!', 'Perfect!', 'Excellent!'],
  GAME_COPIED_MESSAGE: 'Game copied to clipboard',
  NOT_ENOUGH_LETTERS_MESSAGE: 'Not enough letters',
  WORD_NOT_FOUND_MESSAGE: 'Word not found',
  HARD_MODE_ALERT_MESSAGE: 'Hard mode can only be enabled at the start!',
  HARD_MODE_DESCRIPTION: 'Any revealed hints must be used in subsequent guesses',
  HIGH_CONTRAST_MODE_DESCRIPTION: 'For improved color vision',
  CORRECT_WORD_MESSAGE: (solution: string) => `The word was ${solution}`,
  WRONG_SPOT_MESSAGE: (guess: string, position: number) => `Must use ${guess} in position ${position}`,
  NOT_CONTAINED_MESSAGE: (letter: string) => `Guess must contain ${letter}`,
  ENTER_TEXT: 'done',
  DELETE_TEXT: 'backspace',
  STATISTICS_TITLE: 'Statistics',
  GUESS_DISTRIBUTION_TEXT: 'Guess Distribution',
  NEW_WORD_TEXT: 'New word',
  SHARE_TEXT: 'Share',
  SHARE_FAILURE_TEXT: 'Unable to share the results. This feature is available only in secure contexts (HTTPS).',
  TOTAL_TRIES_TEXT: 'Total tries',
  SUCCESS_RATE_TEXT: 'Success rate',
  CURRENT_STREAK_TEXT: 'Current streak',
  BEST_STREAK_TEXT: 'Best streak',
  DISCOURAGE_INAPP_BROWSER_TEXT: "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you to use your device's default browser.",
  DATEPICKER_TITLE: 'Choose past date',
  DATEPICKER_CHOOSE_TEXT: 'Choose',
  DATEPICKER_TODAY_TEXT: 'today',
  ARCHIVE_GAMEDATE_TEXT: 'Game date',
}

export const LOCALE_TR: LocaleStrings = {
  GAME_TITLE: 'Kırım Tatarcası Wordle',
  WIN_MESSAGES: ['Çok güzel!', 'Aferin!', 'İyi yapıldı!', 'Mükemmel!', 'Fevkalade!'],
  GAME_COPIED_MESSAGE: 'Oyun kopyalandı',
  NOT_ENOUGH_LETTERS_MESSAGE: 'Yeterli harf yok',
  WORD_NOT_FOUND_MESSAGE: 'Kelime bulunamadı',
  HARD_MODE_ALERT_MESSAGE: 'Zor mod sadece başlangıçta etkinleştirilebilir!',
  HARD_MODE_DESCRIPTION: 'Açığa çıkan ipuçları sonraki tahminlerde kullanılmalıdır',
  HIGH_CONTRAST_MODE_DESCRIPTION: 'Renk körlüğü için iyileştirme',
  CORRECT_WORD_MESSAGE: (solution: string) => `Kelime ${solution} idi`,
  WRONG_SPOT_MESSAGE: (guess: string, position: number) => `${guess} harfi ${position} konumunda kullanılmalı`,
  NOT_CONTAINED_MESSAGE: (letter: string) => `Tahmin ${letter} harfini içermeli`,
  ENTER_TEXT: 'done',
  DELETE_TEXT: 'backspace',
  STATISTICS_TITLE: 'İstatistikler',
  GUESS_DISTRIBUTION_TEXT: 'Tahmin Dağılımı',
  NEW_WORD_TEXT: 'Yeni kelime',
  SHARE_TEXT: 'Paylaş',
  SHARE_FAILURE_TEXT: 'Sonuçlar paylaşılamadı. Bu özellik sadece güvenli bağlamlarda (HTTPS) çalışır.',
  TOTAL_TRIES_TEXT: 'Toplam denemeler',
  SUCCESS_RATE_TEXT: 'Başarı oranı',
  CURRENT_STREAK_TEXT: 'Şimdiki seri',
  BEST_STREAK_TEXT: 'En iyi seri',
  DISCOURAGE_INAPP_BROWSER_TEXT: "Gömülü bir tarayıcı kullanıyorsunuz ve sonuçlarınızı paylaşma veya kaydetmede sorunlar yaşayabilirsiniz. Cihazınızın varsayılan tarayıcısını kullanmanızı öneririz.",
  DATEPICKER_TITLE: 'Geçmiş tarihi seç',
  DATEPICKER_CHOOSE_TEXT: 'Seç',
  DATEPICKER_TODAY_TEXT: 'bugün',
  ARCHIVE_GAMEDATE_TEXT: 'Oyun tarihi',
}

export const getLocale = (): string => {
  const urlParams = new URLSearchParams(window.location.search)
  const langParam = urlParams.get('lang')
  
  if (langParam) {
    return langParam
  }
  
  const browserLang = navigator.language.substring(0, 2)
  switch (browserLang) {
    case 'tr': return 'tr'
    case 'en': return 'en'
    default: return 'crh'
  }
}

export const getLocalizedStrings = (): LocaleStrings => {
  const locale = getLocale()
  
  switch (locale) {
    case 'en': return LOCALE_EN
    case 'tr': return LOCALE_TR
    case 'crh':
    default: return LOCALE_CRH
  }
}