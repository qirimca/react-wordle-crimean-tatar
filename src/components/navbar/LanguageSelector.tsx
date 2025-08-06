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
    <div className="language-selector">
      <select
        value={currentLocale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="text-xs bg-transparent border border-gray-300 dark:border-gray-500 rounded px-2 py-1 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-400 focus:outline-none focus:border-blue-500"
        title="Select language / Dil seç / Tañla til"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-white dark:bg-gray-800">
            {lang.nativeName}
          </option>
        ))}
      </select>
    </div>
  )
}