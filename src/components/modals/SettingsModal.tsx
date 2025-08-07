import { getLocalizedStrings } from '../../constants/locales'
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  const strings = getLocalizedStrings()

  return (
    <BaseModal
      title={strings.SETTINGS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <div className="mt-2 flex flex-col divide-y">
        <SettingsToggle
          settingName={strings.HARD_MODE_TEXT}
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={strings.HARD_MODE_DESCRIPTION}
        />
        <SettingsToggle
          settingName={strings.DARK_MODE_TEXT}
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName={strings.HIGH_CONTRAST_MODE_TEXT}
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={strings.HIGH_CONTRAST_MODE_DESCRIPTION}
        />
      </div>
    </BaseModal>
  )
}
