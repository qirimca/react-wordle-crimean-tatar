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
  // Info Modal
  INFO_MODAL_TITLE: string
  INFO_MODAL_DESCRIPTION: string
  INFO_MODAL_CORRECT_EXPLANATION: string
  INFO_MODAL_PRESENT_EXPLANATION: string
  INFO_MODAL_ABSENT_EXPLANATION: string
  INFO_MODAL_BETA_TITLE: string
  INFO_MODAL_BETA_DESCRIPTION: string
  INFO_MODAL_SOURCE_CODE_TEXT: string
  INFO_MODAL_SOURCE_CODE_LINK: string
  INFO_MODAL_KEYBOARD_HINT?: string
  VERSION_BUILD: string
  // Settings Modal
  SETTINGS_TITLE: string
  TRANSFER_STATS_TEXT: string
  HARD_MODE_TEXT: string
  DARK_MODE_TEXT: string
  HIGH_CONTRAST_MODE_TEXT: string
  // Transfer Stats Modal
  TRANSFER_INSTRUCTIONS_TEXT: string
  THIS_IS_MY_TEXT: string
  OLD_DEVICE_TEXT: string
  NEW_DEVICE_TEXT: string
  // Migration Stats
  MIGRATE_BUTTON_TEXT: string
  MIGRATE_DESCRIPTION_TEXT: string
  // Navbar
  BY_TEXT: string
}

export const LOCALE_CRH: LocaleStrings = {
  GAME_TITLE: 'Qırımtatar Söz Tapuv Oyunı',
  WIN_MESSAGES: [
    'Pek güzel!',
    'Aferim!',
    'Yaxşı yapıldı!',
    'Mükemmel!',
    'Fevqalade!',
  ],
  GAME_COPIED_MESSAGE: 'Oyun kopyalandı',
  NOT_ENOUGH_LETTERS_MESSAGE: 'Arif yeterli degil',
  WORD_NOT_FOUND_MESSAGE: 'Söz tapılmadı',
  HARD_MODE_ALERT_MESSAGE: 'Çetin rejim faqat başlanğıçta qoşıla bile!',
  HARD_MODE_DESCRIPTION:
    'Açılğan işaretler sonrakı tahmislerde istimat etilmeli',
  HIGH_CONTRAST_MODE_DESCRIPTION: 'Renk körüni için yaqşılaştırıluv',
  CORRECT_WORD_MESSAGE: (solution: string) => `Söz ${solution} edi`,
  WRONG_SPOT_MESSAGE: (guess: string, position: number) =>
    `${guess} arifi ${position} mevamında qullanılmalı`,
  NOT_CONTAINED_MESSAGE: (letter: string) =>
    `Tahmin ${letter} arifini ihtiva etmeli`,
  ENTER_TEXT: 'done',
  DELETE_TEXT: 'backspace',
  STATISTICS_TITLE: 'Statistika',
  GUESS_DISTRIBUTION_TEXT: 'Tahmin Taqsimi',
  NEW_WORD_TEXT: 'Yañı söz',
  SHARE_TEXT: 'Paylaşmaq',
  SHARE_FAILURE_TEXT:
    'Neticeler paylaşılmadı. Bu özellik faqat emniyetli kontekstlerde (HTTPS) çalışır.',
  TOTAL_TRIES_TEXT: 'Umumî denemeler',
  SUCCESS_RATE_TEXT: 'Başarı nisbeti',
  CURRENT_STREAK_TEXT: 'Şimdiki qator',
  BEST_STREAK_TEXT: 'Eñ iyi qator',
  DISCOURAGE_INAPP_BROWSER_TEXT:
    'Siz içeri alınğan brauzer qullanasız ve netice paylaşmaqta veya saqlamaqta problemler yaşay bilesiñiz. Cihazıñıznıñ esas brauzerni qullanmanı tavsiye eteriz.',
  DATEPICKER_TITLE: 'Keçken tarihni saylan',
  DATEPICKER_CHOOSE_TEXT: 'Saylan',
  DATEPICKER_TODAY_TEXT: 'bugün',
  ARCHIVE_GAMEDATE_TEXT: 'Oyun tarihi',
  // Info Modal
  INFO_MODAL_TITLE: 'Nasıl oynanır',
  INFO_MODAL_DESCRIPTION:
    'Sözü 6 deneme ile tapıñız. Er deneme soñra, karoçıqları rengi sözge qañcalıq yaqın olğanıñızı kösterir.',
  INFO_MODAL_CORRECT_EXPLANATION: 'K arifi sözde bar ve doğru yerde tura.',
  INFO_MODAL_PRESENT_EXPLANATION: 'L arifi sözde bar amma yañış yerde tura.',
  INFO_MODAL_ABSENT_EXPLANATION: 'E arifi bu sözde iç bir yerde yoq.',
  INFO_MODAL_BETA_TITLE: '⚠️ Beta sürüm',
  INFO_MODAL_BETA_DESCRIPTION:
    'Bu çeviri otomatik oluşturuldu ve gönüllüler tarafından kontrol ediliyor. Hataları bildirmek ve çeviri iyileştirmelerine yardımcı olmak için bize ulaşın!',
  INFO_MODAL_SOURCE_CODE_TEXT:
    'Bu epimiz bilgen ve sevgen söz tapuv oyunınıñ açıq menba versiyası',
  INFO_MODAL_SOURCE_CODE_LINK: 'kodqa şu yerde baqıñız',
  INFO_MODAL_KEYBOARD_HINT:
    'iOS qullanıcıları içün: Daha qolay giriş içün QırımKey klavyesini yükley bilesiñiz.',
  VERSION_BUILD: 'Inal',
  // Settings Modal
  SETTINGS_TITLE: 'Ayarlar',
  TRANSFER_STATS_TEXT: 'Statistikalarıñıznı köçür',
  HARD_MODE_TEXT: 'Çetin Rejim',
  DARK_MODE_TEXT: 'Qarañqı Rejim',
  HIGH_CONTRAST_MODE_TEXT: 'Yüksek Kontrast Rejimi',
  // Transfer Stats Modal
  TRANSFER_INSTRUCTIONS_TEXT:
    'Eski cihazıñızdan köçürme kodunı kopyalañız ve yañı cihazga yapıştırıñız.',
  THIS_IS_MY_TEXT: 'Bu menim:',
  OLD_DEVICE_TEXT: 'eski cihaz',
  NEW_DEVICE_TEXT: 'yañı cihaz',
  // Migration Stats
  MIGRATE_BUTTON_TEXT: 'Köçür',
  MIGRATE_DESCRIPTION_TEXT:
    'Statistikalarıñıznı yañı cihazğa köçürmek içün munğa tıqlañız.',
  // Navbar
  BY_TEXT: ' by ',
}

export const LOCALE_TR: LocaleStrings = {
  GAME_TITLE: 'Kırım Tatarcası Wordle',
  WIN_MESSAGES: [
    'Çok güzel!',
    'Aferin!',
    'İyi yapıldı!',
    'Mükemmel!',
    'Fevkalade!',
  ],
  GAME_COPIED_MESSAGE: 'Oyun kopyalandı',
  NOT_ENOUGH_LETTERS_MESSAGE: 'Yeterli harf yok',
  WORD_NOT_FOUND_MESSAGE: 'Kelime bulunamadı',
  HARD_MODE_ALERT_MESSAGE: 'Zor mod sadece başlangıçta etkinleştirilebilir!',
  HARD_MODE_DESCRIPTION:
    'Açığa çıkan ipuçları sonraki tahminlerde kullanılmalıdır',
  HIGH_CONTRAST_MODE_DESCRIPTION: 'Renk körlüğü için iyileştirme',
  CORRECT_WORD_MESSAGE: (solution: string) => `Kelime ${solution} idi`,
  WRONG_SPOT_MESSAGE: (guess: string, position: number) =>
    `${guess} harfi ${position} konumunda kullanılmalı`,
  NOT_CONTAINED_MESSAGE: (letter: string) =>
    `Tahmin ${letter} harfini içermeli`,
  ENTER_TEXT: 'done',
  DELETE_TEXT: 'backspace',
  STATISTICS_TITLE: 'İstatistikler',
  GUESS_DISTRIBUTION_TEXT: 'Tahmin Dağılımı',
  NEW_WORD_TEXT: 'Yeni kelime',
  SHARE_TEXT: 'Paylaş',
  SHARE_FAILURE_TEXT:
    'Sonuçlar paylaşılamadı. Bu özellik sadece güvenli bağlamlarda (HTTPS) çalışır.',
  TOTAL_TRIES_TEXT: 'Toplam denemeler',
  SUCCESS_RATE_TEXT: 'Başarı oranı',
  CURRENT_STREAK_TEXT: 'Şimdiki seri',
  BEST_STREAK_TEXT: 'En iyi seri',
  DISCOURAGE_INAPP_BROWSER_TEXT:
    'Gömülü bir tarayıcı kullanıyorsunuz ve sonuçlarınızı paylaşma veya kaydetmede sorunlar yaşayabilirsiniz. Cihazınızın varsayılan tarayıcısını kullanmanızı öneririz.',
  DATEPICKER_TITLE: 'Geçmiş tarihi seç',
  DATEPICKER_CHOOSE_TEXT: 'Seç',
  DATEPICKER_TODAY_TEXT: 'bugün',
  ARCHIVE_GAMEDATE_TEXT: 'Oyun tarihi',
  // Info Modal
  INFO_MODAL_TITLE: 'Nasıl oynanır',
  INFO_MODAL_DESCRIPTION:
    'Kelimeyi 6 denemede tahmin edin. Her tahminden sonra, tahmininizin kelimeye ne kadar yakın olduğunu göstermek için karoların rengi değişecek.',
  INFO_MODAL_CORRECT_EXPLANATION: 'K harfi kelimede var ve doğru yerde.',
  INFO_MODAL_PRESENT_EXPLANATION: 'L harfi kelimede var ama yanlış yerde.',
  INFO_MODAL_ABSENT_EXPLANATION: 'E harfi kelimede hiç yok.',
  INFO_MODAL_BETA_TITLE: '⚠️ Beta sürüm',
  INFO_MODAL_BETA_DESCRIPTION:
    'Bu çeviri otomatik oluşturuldu ve gönüllüler tarafından kontrol ediliyor. Hataları bildirmek ve çeviri iyileştirmelerine yardım etmek için bize ulaşın!',
  INFO_MODAL_SOURCE_CODE_TEXT:
    'Bu, hepimizin bildiği ve sevdiği kelime tahmin oyununun açık kaynak versiyonu',
  INFO_MODAL_SOURCE_CODE_LINK: 'koda buradan bakın',
  INFO_MODAL_KEYBOARD_HINT:
    'iOS kullanıcıları için: Daha kolay giriş için QırımKey klavyesini yükleyebilirsiniz.',
  VERSION_BUILD: 'İnşa',
  // Settings Modal
  SETTINGS_TITLE: 'Ayarlar',
  TRANSFER_STATS_TEXT: 'İstatistiklerinizi aktarın',
  HARD_MODE_TEXT: 'Zor Mod',
  DARK_MODE_TEXT: 'Karanlık Mod',
  HIGH_CONTRAST_MODE_TEXT: 'Yüksek Kontrast Modu',
  // Transfer Stats Modal
  TRANSFER_INSTRUCTIONS_TEXT:
    'Eski cihazınızdaki geçiş kodunu kopyalayın ve yeni cihazda girdiğe yapıştırın.',
  THIS_IS_MY_TEXT: 'Bu benim:',
  OLD_DEVICE_TEXT: 'eski cihaz',
  NEW_DEVICE_TEXT: 'yeni cihaz',
  // Migration Stats
  MIGRATE_BUTTON_TEXT: 'Aktar',
  MIGRATE_DESCRIPTION_TEXT:
    'İstatistiklerinizi yeni cihaza aktarmak için buraya tıklayın.',
  // Navbar
  BY_TEXT: ' tarafından ',
}

export const LOCALE_UK: LocaleStrings = {
  GAME_TITLE: 'Кримськотатарський Wordle',
  WIN_MESSAGES: [
    'Чудово!',
    'Молодець!',
    'Добре зроблено!',
    'Ідеально!',
    'Відмінно!',
  ],
  GAME_COPIED_MESSAGE: 'Гру скопійовано',
  NOT_ENOUGH_LETTERS_MESSAGE: 'Недостатньо літер',
  WORD_NOT_FOUND_MESSAGE: 'Слово не знайдено',
  HARD_MODE_ALERT_MESSAGE: 'Складний режим можна увімкнути лише на початку!',
  HARD_MODE_DESCRIPTION:
    'Відкриті підказки мають використовуватися в наступних спробах',
  HIGH_CONTRAST_MODE_DESCRIPTION: 'Для покращення сприйняття кольорів',
  CORRECT_WORD_MESSAGE: (solution: string) => `Слово було ${solution}`,
  WRONG_SPOT_MESSAGE: (guess: string, position: number) =>
    `Літера ${guess} має бути на ${position} позиції`,
  NOT_CONTAINED_MESSAGE: (letter: string) => `Здогадка має містити ${letter}`,
  ENTER_TEXT: 'done',
  DELETE_TEXT: 'backspace',
  STATISTICS_TITLE: 'Статистика',
  GUESS_DISTRIBUTION_TEXT: 'Розподіл спроб',
  NEW_WORD_TEXT: 'Нове слово',
  SHARE_TEXT: 'Поділитися',
  SHARE_FAILURE_TEXT:
    'Не вдалося поділитися результатами. Ця функція доступна лише в безпечних контекстах (HTTPS).',
  TOTAL_TRIES_TEXT: 'Всього спроб',
  SUCCESS_RATE_TEXT: 'Відсоток успіху',
  CURRENT_STREAK_TEXT: 'Поточна серія',
  BEST_STREAK_TEXT: 'Найкраща серія',
  DISCOURAGE_INAPP_BROWSER_TEXT:
    'Ви використовуєте вбудований браузер і можете мати проблеми з діленням або збереженням результатів. Рекомендуємо використовувати основний браузер пристрою.',
  DATEPICKER_TITLE: 'Вибрати минулу дату',
  DATEPICKER_CHOOSE_TEXT: 'Вибрати',
  DATEPICKER_TODAY_TEXT: 'сьогодні',
  ARCHIVE_GAMEDATE_TEXT: 'Дата гри',
  // Info Modal
  INFO_MODAL_TITLE: 'Як грати',
  INFO_MODAL_DESCRIPTION:
    'Вгадайте слово за 6 спроб. Після кожного вгадування колір плиток зміниться, щоб показати, наскільки близьким було ваше вгадування.',
  INFO_MODAL_CORRECT_EXPLANATION: 'Літера K є у слові і на правильному місці.',
  INFO_MODAL_PRESENT_EXPLANATION:
    'Літера L є у слові, але на неправильному місці.',
  INFO_MODAL_ABSENT_EXPLANATION: 'Літери E немає в слові.',
  INFO_MODAL_BETA_TITLE: '⚠️ Бета версія',
  INFO_MODAL_BETA_DESCRIPTION:
    'Цей переклад був створений автоматично і перевіряється волонтерами. Будь ласка, звертайтеся до нас, щоб повідомити про помилки та покращити переклади!',
  INFO_MODAL_SOURCE_CODE_TEXT:
    'Це відкритокодна версія гри вгадування слів, яку ми всі знаємо і любимо',
  INFO_MODAL_SOURCE_CODE_LINK: 'подивитися код тут',
  INFO_MODAL_KEYBOARD_HINT:
    'Для користувачів iOS: Ви можете завантажити клавіатуру QırımKey для зручнішого введення.',
  VERSION_BUILD: 'Збірка',
  // Settings Modal
  SETTINGS_TITLE: 'Налаштування',
  TRANSFER_STATS_TEXT: 'Перенести вашу статистику',
  HARD_MODE_TEXT: 'Складний режим',
  DARK_MODE_TEXT: 'Темний режим',
  HIGH_CONTRAST_MODE_TEXT: 'Високий контраст',
  // Transfer Stats Modal
  TRANSFER_INSTRUCTIONS_TEXT:
    'Скопіюйте код міграції на вашому старому пристрої та вставте його на новому пристрої.',
  THIS_IS_MY_TEXT: 'Це мій:',
  OLD_DEVICE_TEXT: 'старий пристрій',
  NEW_DEVICE_TEXT: 'новий пристрій',
  // Migration Stats
  MIGRATE_BUTTON_TEXT: 'Перенести',
  MIGRATE_DESCRIPTION_TEXT:
    'Натисніть тут, щоб перенести статистику на новий пристрій.',
  // Navbar
  BY_TEXT: ' від ',
}

export const LOCALE_EN: LocaleStrings = {
  GAME_TITLE: 'Crimean Tatar Wordle',
  WIN_MESSAGES: ['Great!', 'Awesome!', 'Well done!', 'Perfect!', 'Excellent!'],
  GAME_COPIED_MESSAGE: 'Game copied to clipboard',
  NOT_ENOUGH_LETTERS_MESSAGE: 'Not enough letters',
  WORD_NOT_FOUND_MESSAGE: 'Word not found',
  HARD_MODE_ALERT_MESSAGE: 'Hard Mode can only be enabled at the start!',
  HARD_MODE_DESCRIPTION:
    'Any revealed hints must be used in subsequent guesses',
  HIGH_CONTRAST_MODE_DESCRIPTION: 'For improved color vision',
  CORRECT_WORD_MESSAGE: (solution: string) => `The word was ${solution}`,
  WRONG_SPOT_MESSAGE: (guess: string, position: number) =>
    `Must use ${guess} in position ${position}`,
  NOT_CONTAINED_MESSAGE: (letter: string) => `Guess must contain ${letter}`,
  ENTER_TEXT: 'done',
  DELETE_TEXT: 'backspace',
  STATISTICS_TITLE: 'Statistics',
  GUESS_DISTRIBUTION_TEXT: 'Guess Distribution',
  NEW_WORD_TEXT: 'New word',
  SHARE_TEXT: 'Share',
  SHARE_FAILURE_TEXT:
    'Unable to share the results. This feature is only available in secure contexts (HTTPS).',
  TOTAL_TRIES_TEXT: 'Total tries',
  SUCCESS_RATE_TEXT: 'Success rate',
  CURRENT_STREAK_TEXT: 'Current streak',
  BEST_STREAK_TEXT: 'Best streak',
  DISCOURAGE_INAPP_BROWSER_TEXT:
    "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you to use your device's default browser.",
  DATEPICKER_TITLE: 'Choose past date',
  DATEPICKER_CHOOSE_TEXT: 'Choose',
  DATEPICKER_TODAY_TEXT: 'today',
  ARCHIVE_GAMEDATE_TEXT: 'Game date',
  // Info Modal
  INFO_MODAL_TITLE: 'How to play',
  INFO_MODAL_DESCRIPTION:
    'Guess the word in 6 tries. After each guess, the color of the tiles will change to show how close your guess was to the word.',
  INFO_MODAL_CORRECT_EXPLANATION:
    'The letter K is in the word and in the correct spot.',
  INFO_MODAL_PRESENT_EXPLANATION:
    'The letter L is in the word but in the wrong spot.',
  INFO_MODAL_ABSENT_EXPLANATION: 'The letter E is not in the word in any spot.',
  INFO_MODAL_BETA_TITLE: '⚠️ Beta version',
  INFO_MODAL_BETA_DESCRIPTION:
    'This translation was auto-generated and is being reviewed by volunteers. Please contact us to report errors and help improve translations!',
  INFO_MODAL_SOURCE_CODE_TEXT:
    'This is an open source version of the word guessing game we all know and love',
  INFO_MODAL_SOURCE_CODE_LINK: 'check out the code here',
  INFO_MODAL_KEYBOARD_HINT:
    'For iOS users: You can download the QırımKey keyboard for easier input.',
  VERSION_BUILD: 'Build',
  // Settings Modal
  SETTINGS_TITLE: 'Settings',
  TRANSFER_STATS_TEXT: 'Transfer your statistics',
  HARD_MODE_TEXT: 'Hard Mode',
  DARK_MODE_TEXT: 'Dark Mode',
  HIGH_CONTRAST_MODE_TEXT: 'High Contrast Mode',
  // Transfer Stats Modal
  TRANSFER_INSTRUCTIONS_TEXT:
    'Copy the migration code on your old device and paste it into the input on your new device.',
  THIS_IS_MY_TEXT: 'This is my:',
  OLD_DEVICE_TEXT: 'old device',
  NEW_DEVICE_TEXT: 'new device',
  // Migration Stats
  MIGRATE_BUTTON_TEXT: 'Migrate',
  MIGRATE_DESCRIPTION_TEXT:
    'Click here to transfer your statistics to a new device.',
  // Navbar
  BY_TEXT: ' by ',
}

export const getLocale = (): string => {
  const urlParams = new URLSearchParams(window.location.search)
  const langParam = urlParams.get('lang')

  if (langParam) {
    return langParam
  }

  // За замовчуванням завжди кримськотатарська мова
  return 'crh'
}

export const getLocalizedStrings = (): LocaleStrings => {
  const locale = getLocale()

  switch (locale) {
    case 'en':
      return LOCALE_EN
    case 'uk':
      return LOCALE_UK
    case 'tr':
      return LOCALE_TR
    case 'crh':
    default:
      return LOCALE_CRH
  }
}
