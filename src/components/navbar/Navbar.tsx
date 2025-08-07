import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'
import { getLocalizedStrings } from '../../constants/locales'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsDatePickerModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  const strings = getLocalizedStrings()
  return (
    <div className="navbar mb-8">
      <div className="flex w-80 mx-auto items-center">
        <div className="ml-2.5 grow dark:text-white">
          <h1 className="flex items-baseline text-xl grow font-bold heading">
            <span>Wordle</span>
            <span className="ml-2 px-2 py-0.5 text-xs font-normal bg-white text-gray-800 dark:bg-gray-700 dark:text-white rounded-full border border-gray-300 dark:border-gray-500">
              Beta
            </span>
          </h1>
          <div className="text-sm">
            <span>{strings.BY_TEXT} </span>
            <span className="font-bold">QIRI'M YOUNG</span>
          </div>
        </div>
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <ChartBarIcon
          className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
          onClick={() => setIsStatsModalOpen(true)}
        />
        <CogIcon
          className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
          onClick={() => setIsSettingsModalOpen(true)}
        />
        {ENABLE_ARCHIVED_GAMES && (
          <CalendarIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsDatePickerModalOpen(true)}
          />
        )}
      </div>
    </div>
  )
}
