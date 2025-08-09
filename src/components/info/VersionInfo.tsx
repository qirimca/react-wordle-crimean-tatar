import { getLocalizedStrings } from '../../constants/locales'

const BUILD_DATE = process.env.REACT_APP_BUILD_DATE || new Date().toISOString()
const VERSION =
  process.env.REACT_APP_VERSION || require('../../../package.json').version
const COMMIT_HASH = process.env.REACT_APP_COMMIT_HASH || 'dev'

export const VersionInfo = () => {
  const strings = getLocalizedStrings()
  const buildDate = new Date(BUILD_DATE)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="mt-4 border-t border-gray-200 pt-3 dark:border-gray-700">
      <div className="text-xs text-gray-400 dark:text-gray-500">
        <div className="flex justify-between">
          <span>v{VERSION}</span>
          <span>{formatDate(buildDate)}</span>
        </div>
        <div className="mt-1 text-center">
          {strings.VERSION_BUILD || 'Збірка'}: {COMMIT_HASH.substring(0, 7)}
        </div>
      </div>
    </div>
  )
}
