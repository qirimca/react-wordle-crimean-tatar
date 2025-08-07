import { useState } from 'react'
import { getLocale } from '../../constants/locales'

interface Language {
  code: string
  name: string
  nativeName: string
}

const LANGUAGES: Language[] = [
  { code: 'crh', name: 'Crimean Tatar', nativeName: 'Qırımtatar' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
]

export const LanguageSelector = () => {
  const currentLocale = getLocale()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = LANGUAGES.find(lang => lang.code === currentLocale) || LANGUAGES[0]

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
    <div 
      className="language-selector relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center cursor-pointer px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <span 
          className="text-xs text-gray-700 dark:text-gray-300 select-none text-center"
          style={{ fontFamily: 'e-Ukraine, system-ui, sans-serif' }}
          title="Select language / Вибрати мову"
        >
          {currentLanguage.nativeName}
        </span>
        <span 
          className={`material-icons text-sm text-gray-500 dark:text-gray-400 ml-1 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          arrow_drop_down
        </span>
      </div>
      
      {isOpen && (
        <div 
          className="absolute top-full right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 min-w-max"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`block w-full text-left px-3 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                lang.code === currentLocale 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              style={{ fontFamily: 'e-Ukraine, system-ui, sans-serif' }}
            >
              {lang.nativeName}
              {lang.code === currentLocale && (
                <span className="ml-2 text-blue-500">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}