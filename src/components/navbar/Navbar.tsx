import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
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
      <div className="mx-auto flex w-80 items-center">
        <div className="ml-2.5 grow dark:text-white">
          <h1 className="heading flex grow items-baseline text-xl font-bold">
            <span>Wordle</span>
            <span className="ml-2 rounded-full border border-gray-300 bg-white px-2 py-0.5 text-xs font-normal text-gray-800 dark:border-gray-500 dark:bg-gray-700 dark:text-white">
              Beta
            </span>
          </h1>
          <div className="text-sm">
            <span>{strings.BY_TEXT} </span>
            <span className="font-bold">QIRI'M YOUNG</span>
          </div>
        </div>
        <InformationCircleIcon
          className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <ChartBarIcon
          className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsStatsModalOpen(true)}
        />
        <CogIcon
          className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white"
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
