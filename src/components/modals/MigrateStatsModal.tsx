import { useState } from 'react'

import { GameStats, StoredGameState } from '../../lib/localStorage'
import { getLocalizedStrings } from '../../constants/locales'
import { EmigratePanel } from '../stats/EmigratePanel'
import { ImmigratePanel } from '../stats/ImmigratePanel'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export type MigrationStats = {
  statistics: GameStats
  gameState: StoredGameState | null
}

export const MigrateStatsModal = ({ isOpen, handleClose }: Props) => {
  const [isEmigrateVisible, setIsEmigrateVisible] = useState(true)
  const strings = getLocalizedStrings()

  return (
    <BaseModal
      title={strings.TRANSFER_STATS_TEXT}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="mb-4 mt-4 text-sm text-gray-500 dark:text-gray-300">
        {strings.TRANSFER_INSTRUCTIONS_TEXT}
      </p>

      <div className="w-full columns-3 gap-0">
        <div className="mb-4 flex items-center">
          <p className="mb-0 flex text-sm font-medium text-gray-900 dark:text-gray-300">
            {strings.THIS_IS_MY_TEXT}
          </p>
        </div>
        <div className="mb-4 flex items-center">
          <input
            checked={isEmigrateVisible}
            onChange={() => setIsEmigrateVisible(true)}
            id="emigrate-radio-button"
            radioGroup="migrate-radio-buttons"
            type="radio"
            value=""
            name="emigrate-radio-button"
            className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="emigrate-radio-button"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {strings.OLD_DEVICE_TEXT}
          </label>
        </div>
        <div className="flex items-center">
          <input
            checked={!isEmigrateVisible}
            onChange={() => setIsEmigrateVisible(false)}
            id="immigrate-radio-button"
            radioGroup="migrate-radio-buttons"
            type="radio"
            value=""
            name="immigrate-radio-button"
            className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="immigrate-radio-button"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {strings.NEW_DEVICE_TEXT}
          </label>
        </div>
      </div>

      {isEmigrateVisible && <EmigratePanel />}
      {!isEmigrateVisible && <ImmigratePanel />}
    </BaseModal>
  )
}
