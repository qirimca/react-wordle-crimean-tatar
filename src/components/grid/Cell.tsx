import classnames from 'classnames'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import { CharStatus } from '../../lib/statuses'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isHighContrast = getStoredIsHighContrastMode()

  const cellClasses = classnames(
    'xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
    {
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    },
  )

  const frontClasses = classnames('cell-face front', 'w-full h-full rounded', {
    'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
      !status,
    'border-black dark:border-slate-100': value && !status,
  })

  const backClasses = classnames('cell-face back', 'w-full h-full rounded', {
    'absent shadowed cell-absent text-white': status === 'absent',
    'correct shadowed cell-correct text-white': status === 'correct',
    'present shadowed cell-present text-white': status === 'present',
  })

  return (
    <div className={cellClasses} style={{ animationDelay }}>
      <div className={frontClasses}>{value}</div>
      <div className={backClasses}>{value}</div>
    </div>
  )
}
