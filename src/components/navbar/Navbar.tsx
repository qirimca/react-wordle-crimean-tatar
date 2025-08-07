import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'
import { getLocalizedStrings } from '../../constants/locales'
import { LanguageSelector } from './LanguageSelector'

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
    <div className="navbar">
      <div className="navbar-content px-5 short:h-auto">
        <div className="flex w-16 sm:w-20">
          <InformationCircleIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          {ENABLE_ARCHIVED_GAMES && (
            <CalendarIcon
              className="ml-3 h-6 w-6 cursor-pointer dark:stroke-white"
              onClick={() => setIsDatePickerModalOpen(true)}
            />
          )}
        </div>
        <div className="flex-1 flex justify-center px-2">
          <p className="text-lg sm:text-xl dark:text-white heading text-center">
            <span className="font-bold">Wordle</span>
            <span className="font-normal hidden sm:inline">{strings.BY_TEXT}</span>
            <span className="font-bold hidden sm:inline">QIRI'M YOUNG</span>
          </p>
        </div>
        <div className="right-icons flex justify-end items-center w-28 sm:w-32">
          <LanguageSelector />
          <ChartBarIcon
            className="ml-2 h-5 w-5 sm:h-6 sm:w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="ml-2 h-5 w-5 sm:h-6 sm:w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
