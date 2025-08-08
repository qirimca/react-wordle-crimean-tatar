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

interface Props {
  onLanguageChange?: () => void
  autoFocus?: boolean
}

export const LanguageSelector = ({
  onLanguageChange,
  autoFocus,
}: Props = {}) => {
  const currentLocale = getLocale()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === currentLocale) || LANGUAGES[0]

  const changeLanguage = (langCode: string) => {
    const url = new URL(window.location.href)
    if (langCode === 'crh') {
      url.searchParams.delete('lang')
    } else {
      url.searchParams.set('lang', langCode)
    }

    // Викликати callback перед перезавантаженням
    if (onLanguageChange) {
      onLanguageChange()
    }

    window.location.href = url.toString()
  }

  return (
    <div
      className="language-selector relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex cursor-pointer items-center rounded px-2 py-1 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:hover:bg-gray-800"
        autoFocus={autoFocus}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
        aria-expanded={isOpen}
        aria-label="Select language / Вибрати мову"
      >
        <span
          className="select-none text-center text-xs text-gray-700 dark:text-gray-300"
          style={{ fontFamily: 'e-Ukraine, system-ui, sans-serif' }}
        >
          {currentLanguage.nativeName}
        </span>
        <svg
          className={`ml-1 h-4 w-4 text-gray-500 transition-transform duration-200 dark:text-gray-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full z-50 min-w-max rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`block w-full px-3 py-2 text-left text-xs transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                lang.code === currentLocale
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
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
