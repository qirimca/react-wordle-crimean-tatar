import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { getLocalizedStrings } from '../../constants/locales'
import { LanguageSelector } from '../navbar/LanguageSelector'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const strings = getLocalizedStrings()
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  
  return (
    <BaseModal 
      title={strings.INFO_MODAL_TITLE} 
      isOpen={isOpen} 
      handleClose={handleClose}
      topLeftComponent={<LanguageSelector onLanguageChange={() => {
        if (isOpen) {
          localStorage.setItem('infoModalOpen', 'true')
        }
      }} />}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {strings.INFO_MODAL_DESCRIPTION}
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="K"
          status="correct"
        />
        <Cell value="I" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="P" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
{strings.INFO_MODAL_CORRECT_EXPLANATION}
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="S" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="Â" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
{strings.INFO_MODAL_PRESENT_EXPLANATION}
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="G" isCompleted={true} />
        <Cell value="Ü" isCompleted={true} />
        <Cell value="Z" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
        <Cell value="L" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
{strings.INFO_MODAL_ABSENT_EXPLANATION}
      </p>

      {isIOS && strings.INFO_MODAL_KEYBOARD_HINT && (
        <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-xs text-blue-700 dark:text-blue-300">
            {strings.INFO_MODAL_KEYBOARD_HINT}{' '}
            <a
              href="https://apps.apple.com/ua/app/qırımkey/id6739430313"
              className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              QırımKey
            </a>
          </p>
        </div>
      )}

      <div className="mt-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
        <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium mb-2">
          {strings.INFO_MODAL_BETA_TITLE}
        </p>
        <p className="text-xs text-yellow-700 dark:text-yellow-300">
          {strings.INFO_MODAL_BETA_DESCRIPTION}
        </p>
      </div>

      <p className="mt-4 text-sm italic text-gray-500 dark:text-gray-300">
        {strings.INFO_MODAL_SOURCE_CODE_TEXT} -{' '}
        <a
          href="https://github.com/qirimca/react-wordle-crimean-tatar"
          className="font-bold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {strings.INFO_MODAL_SOURCE_CODE_LINK}
        </a>{' '}
      </p>
    </BaseModal>
  )
}
