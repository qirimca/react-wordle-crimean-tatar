import { getLocale } from '../../constants/locales'

interface Language {
  code: string
  name: string
  nativeName: string
}

const LANGUAGES: Language[] = [
  { code: 'crh', name: 'Crimean Tatar', nativeName: 'Qırımtatar' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
]

export const LanguageSelector = () => {
  const currentLocale = getLocale()

  const changeLanguage = (langCode: string) => {
    const url = new URL(window.location.href)
    if (langCode === 'crh') {
      url.searchParams.delete('lang')
    } else {
      url.searchParams.set('lang', langCode)
    }
    window.location.href = url.toString()
  }

  return (
    <div className="language-selector relative">
      <div className="flex items-center">
        <select
          value={currentLocale}
          onChange={(e) => changeLanguage(e.target.value)}
          className="text-xs bg-transparent border-0 rounded px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none cursor-pointer appearance-none pr-6"
          title="Select language / Dil seç / Tañla til / Вибрати мову"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code} className="bg-white dark:bg-gray-800">
              {lang.nativeName}
            </option>
          ))}
        </select>
        <span className="material-icons text-sm text-gray-500 dark:text-gray-400 absolute right-0 pointer-events-none">
          arrow_drop_down
        </span>
      </div>
    </div>
  )
}