export const GAME_TITLE = 'Wordle by QIRI\'M YOUNG'

export const WIN_MESSAGES = ['Pek güzel!', 'Aferim!', 'Yahşí yapıldı!', 'Mükemmel!', 'Fevqalade!']
export const GAME_COPIED_MESSAGE = 'Oyun kopyalandı'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Arif yeterli degil'
export const WORD_NOT_FOUND_MESSAGE = 'Söz tapılmadı'
export const HARD_MODE_ALERT_MESSAGE =
  'Çetin rejim faqat başlanğıçta qoşıla bile!'
export const HARD_MODE_DESCRIPTION =
  'Açılğan işaretler sonrakı tahmislerde istimat etilmeli'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Renk körüni için yaqşılaştırıluv'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Söz ${solution} edi`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${guess} arifi ${position} mevamında qullanılmalı`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Tahmin ${letter} arifini ihtiva etmeli`
export const ENTER_TEXT = 'done'
export const DELETE_TEXT = 'backspace'
export const STATISTICS_TITLE = 'Statistika'
export const GUESS_DISTRIBUTION_TEXT = 'Tahmin Taqsimi'
export const NEW_WORD_TEXT = 'Yañı söz'
export const SHARE_TEXT = 'Paylaşmaq'
export const SHARE_FAILURE_TEXT =
  'Neticeler paylaşılmadı. Bu özellik faqat emniyetli kontekstlerde (HTTPS) çalışır.'
export const MIGRATE_BUTTON_TEXT = 'Köçür'
export const MIGRATE_DESCRIPTION_TEXT =
  'Statistikalarıñızı yañı cihaza köçürmek için buragha tıqlañız.'
export const TRANSFER_STATISTICS_TEXT = 'Statistikalarıñızı köçürüñüz'
export const TOTAL_TRIES_TEXT = 'Umumî denemeler'
export const SUCCESS_RATE_TEXT = 'Başarı nisbeti'
export const CURRENT_STREAK_TEXT = 'Şimdiki qator'
export const BEST_STREAK_TEXT = 'Eñ iyi qator'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Siz içeri alınğan brauzer qullanasız ve netice paylaşmaqta veya saqlamaqta problemler yaşay bilesiñiz. Cihazıñıznıñ esas brauzerni qullanmanı tavsiye eteriz."

export const DATEPICKER_TITLE = 'Keçken tarihni saylan'
export const DATEPICKER_CHOOSE_TEXT = 'Saylan'
export const DATEPICKER_TODAY_TEXT = 'bugün'
export const ARCHIVE_GAMEDATE_TEXT = 'Oyun tarihi'
